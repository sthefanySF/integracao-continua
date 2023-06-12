import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeListComponent } from './especialidade-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EspecialidadeService } from 'src/app/service/especialidade.service';
import { FormsModule } from '@angular/forms';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';

describe('EspecialidadeListComponent', () => {
  let component: EspecialidadeListComponent;
  let fixture: ComponentFixture<EspecialidadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      providers: [ EspecialidadeService ],
      declarations: [ EspecialidadeListComponent, BarraComandosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
