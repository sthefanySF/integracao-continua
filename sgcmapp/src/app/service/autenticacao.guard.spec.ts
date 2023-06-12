import { TestBed } from '@angular/core/testing';

import { AutenticacaoGuard } from './autenticacao.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AutenticacaoGuard', () => {
  let guard: AutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(AutenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
