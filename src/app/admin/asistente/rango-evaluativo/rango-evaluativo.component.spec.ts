import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoEvaluativoComponent } from './rango-evaluativo.component';

describe('RangoEvaluativoComponent', () => {
  let component: RangoEvaluativoComponent;
  let fixture: ComponentFixture<RangoEvaluativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangoEvaluativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoEvaluativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
