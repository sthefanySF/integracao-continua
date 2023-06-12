import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeFormComponent } from './especialidade-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EspecialidadeService } from 'src/app/service/especialidade.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EspecialidadeFormComponent', () => {
  let component: EspecialidadeFormComponent;
  let fixture: ComponentFixture<EspecialidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [EspecialidadeService],
      declarations: [ EspecialidadeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
