import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AlertaService } from 'src/app/service/alerta.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IForm } from '../i-form';
import { ETipoAlerta } from 'src/app/model/e-tipo-alerta';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styles: [
  ]
})
export class UsuarioFormComponent implements OnInit, IForm<Usuario> {

  constructor(
      private servico: UsuarioService,
      private servicoAlerta: AlertaService,
      private router: Router,
      private route: ActivatedRoute) { }

  registro: Usuario = <Usuario>{};
  
  submit(form: NgForm): void {
    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/config/usuarios']);
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

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Usuario) => {
          this.registro = resposta;
        }
      });
    }

  }  

}
