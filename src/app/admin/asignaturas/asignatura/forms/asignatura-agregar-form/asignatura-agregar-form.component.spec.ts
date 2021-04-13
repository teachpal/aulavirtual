import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaAgregarFormComponent } from './asignatura-agregar-form.component';

describe('AsignaturaAgregarFormComponent', () => {
  let component: AsignaturaAgregarFormComponent;
  let fixture: ComponentFixture<AsignaturaAgregarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaAgregarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaAgregarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
