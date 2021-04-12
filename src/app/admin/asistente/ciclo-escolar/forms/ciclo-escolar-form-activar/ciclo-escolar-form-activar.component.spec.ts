import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEscolarFormActivarComponent } from './ciclo-escolar-form-activar.component';

describe('CicloEscolarFormActivarComponent', () => {
  let component: CicloEscolarFormActivarComponent;
  let fixture: ComponentFixture<CicloEscolarFormActivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloEscolarFormActivarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloEscolarFormActivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
