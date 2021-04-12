import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaValorativaComponent } from './escala-valorativa.component';

describe('EscalaValorativaComponent', () => {
  let component: EscalaValorativaComponent;
  let fixture: ComponentFixture<EscalaValorativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaValorativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaValorativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
