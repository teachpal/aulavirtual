import { TestBed } from '@angular/core/testing';

import { EscalaValorativaService } from './escala-valorativa.service';

describe('EscalaValorativaService', () => {
  let service: EscalaValorativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalaValorativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
