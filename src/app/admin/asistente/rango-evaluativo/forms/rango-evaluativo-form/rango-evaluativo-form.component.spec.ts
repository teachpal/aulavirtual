import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoEvaluativoFormComponent } from './rango-evaluativo-form.component';

describe('RangoEvaluativoFormComponent', () => {
  let component: RangoEvaluativoFormComponent;
  let fixture: ComponentFixture<RangoEvaluativoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangoEvaluativoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoEvaluativoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
