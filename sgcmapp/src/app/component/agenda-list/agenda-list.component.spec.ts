import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaListComponent } from './agenda-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('AgendaListComponent', () => {
  let component: AgendaListComponent;
  let fixture: ComponentFixture<AgendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ AtendimentoService ],
      declarations: [ AgendaListComponent, BarraComandosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
