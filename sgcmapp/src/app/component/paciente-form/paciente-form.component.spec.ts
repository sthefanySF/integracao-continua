import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteFormComponent } from './paciente-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PacienteService } from 'src/app/service/paciente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('PacienteFormComponent', () => {
  let component: PacienteFormComponent;
  let fixture: ComponentFixture<PacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [PacienteService],
      declarations: [ PacienteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
