import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEditarFormComponent } from './area-editar-form.component';

describe('AreaEditarFormComponent', () => {
  let component: AreaEditarFormComponent;
  let fixture: ComponentFixture<AreaEditarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEditarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaEditarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
