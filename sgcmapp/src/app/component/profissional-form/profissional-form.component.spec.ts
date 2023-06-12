import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalFormComponent } from './profissional-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { FormsModule } from '@angular/forms';
import { ProfissionalListComponent } from '../profissional-list/profissional-list.component';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('ProfissionalFormComponent', () => {
  let component: ProfissionalFormComponent;
  let fixture: ComponentFixture<ProfissionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ProfissionalService],
      declarations: [ ProfissionalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
