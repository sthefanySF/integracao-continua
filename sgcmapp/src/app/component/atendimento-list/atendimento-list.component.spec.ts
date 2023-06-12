import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoListComponent } from './atendimento-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('AtendimentoListComponent', () => {
  let component: AtendimentoListComponent;
  let fixture: ComponentFixture<AtendimentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ AtendimentoService ],
      declarations: [ AtendimentoListComponent, BarraComandosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
