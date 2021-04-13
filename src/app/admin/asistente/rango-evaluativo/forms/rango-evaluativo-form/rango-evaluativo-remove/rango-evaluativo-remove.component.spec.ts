import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoEvaluativoRemoveComponent } from './rango-evaluativo-remove.component';

describe('RangoEvaluativoRemoveComponent', () => {
  let component: RangoEvaluativoRemoveComponent;
  let fixture: ComponentFixture<RangoEvaluativoRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangoEvaluativoRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoEvaluativoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
