import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { ProfissionalListComponent } from './profissional-list.component';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('ProfissionalListComponent', () => {
  let component: ProfissionalListComponent;
  let fixture: ComponentFixture<ProfissionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ProfissionalService],
      declarations: [ ProfissionalListComponent, BarraComandosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
