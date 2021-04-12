import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaValorativaFormComponent } from './escala-valorativa-form.component';

describe('EscalaValorativaFormComponent', () => {
  let component: EscalaValorativaFormComponent;
  let fixture: ComponentFixture<EscalaValorativaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaValorativaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaValorativaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
