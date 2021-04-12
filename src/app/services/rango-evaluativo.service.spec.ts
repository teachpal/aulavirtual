import { TestBed } from '@angular/core/testing';

import { RangoEvaluativoService } from './rango-evaluativo.service';

describe('RangoEvaluativoService', () => {
  let service: RangoEvaluativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangoEvaluativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
