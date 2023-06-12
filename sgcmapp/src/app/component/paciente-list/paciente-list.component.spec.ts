import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListComponent } from './paciente-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { PacienteService } from 'src/app/service/paciente.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('PacienteListComponent', () => {
  let component: PacienteListComponent;
  let fixture: ComponentFixture<PacienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ PacienteService ],
      declarations: [ PacienteListComponent, BarraComandosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
