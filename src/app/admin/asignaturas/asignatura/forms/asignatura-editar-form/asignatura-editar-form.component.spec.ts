import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaEditarFormComponent } from './asignatura-editar-form.component';

describe('AsignaturaEditarFormComponent', () => {
  let component: AsignaturaEditarFormComponent;
  let fixture: ComponentFixture<AsignaturaEditarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaEditarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaEditarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
