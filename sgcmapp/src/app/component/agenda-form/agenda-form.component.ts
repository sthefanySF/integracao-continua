import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Atendimento } from 'src/app/model/atendimento';
import { Convenio } from 'src/app/model/convenio';
import { Paciente } from 'src/app/model/paciente';
import { Profissional } from 'src/app/model/profissional';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import { PacienteService } from 'src/app/service/paciente.service';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { IForm } from '../i-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
import { AlertaService } from 'src/app/service/alerta.service';
import { ETipoAlerta } from 'src/app/model/e-tipo-alerta';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: [
  ]
})
export class AgendaFormComponent implements IForm<Atendimento>, OnInit {

  constructor(
    private servico: AtendimentoService,
    private servicoConvenio: ConvenioService,
    private servicoPaciente: PacienteService,
    private servicoProfissional: ProfissionalService,
    private route: ActivatedRoute,
    private router: Router,
    private servicoAlerta: AlertaService
  ) {}

  ngOnInit(): void {

    this.servicoConvenio.get().subscribe({
      next: (resposta: Convenio[]) => {
        this.convenios = resposta.sort(
          (a, b) => a.nome.localeCompare(b.nome)
        ).filter(item => item.ativo);
      }
    });

    this.servicoPaciente.get().subscribe({
      next: (resposta: Paciente[]) => {
        this.pacientes = resposta.sort(
          (a, b) => a.nome.localeCompare(b.nome)
        );
      }
    });

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta.sort(
          (a, b) => a.nome.localeCompare(b.nome)
        );
      }
    });

    const id = this.route.snapshot.queryParamMap.get("id");
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Atendimento) => {
          this.registro = resposta;
        },
        complete: () => {
          this.verificaHorario();
        }
      });
    }
    
  }

  registro: Atendimento = <Atendimento>{};
  profissionais: Profissional[] = Array<Profissional>();
  convenios: Convenio[] = Array<Convenio>();
  pacientes: Paciente[] = Array<Paciente>();
  compareById = Utils.compareById;
  horariosOcupados: string[] = Array<string>();

  submit(form: NgForm): void {

    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/agenda']);
          this.servicoAlerta.enviarAlerta({
            tipo: ETipoAlerta.SUCESSO,
            mensagem: "Operação realizada com sucesso."
          });
        }
      });
    } else {
      this.servico.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlerta({
            tipo: ETipoAlerta.SUCESSO,
            mensagem: "Operação realizada com sucesso."
          });
        }
      });
    }

  }

  verificaHorario(): void {
    let profissional_id = this.registro.profissional.id;
    let data = this.registro.data;
    if (profissional_id && data) {
      this.servico.getHorariosOcupados(profissional_id, data).subscribe({
        next: (resposta: string[]) => {
          this.horariosOcupados = resposta.map(item => item + ':00');
        },
        complete: () => {
          const selectHora = document.querySelector<HTMLSelectElement>('form select[name="hora"]');
          if (selectHora) {
            Array.from(selectHora.options).forEach(opcao => {
              opcao.disabled = this.horariosOcupados.includes(opcao.value);
            });
          }
        }
      });
    }
  }

}
