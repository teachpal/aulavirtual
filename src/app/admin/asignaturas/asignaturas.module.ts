import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//import {FormGroup, FormControl} from '@angular/forms';
//material
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
//table
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import { MainComponent } from './main/main.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AsignaturaAgregarFormComponent } from './asignatura/forms/asignatura-agregar-form/asignatura-agregar-form.component';

import {AsignaturaService} from 'src/app/services/asignatura-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AsignaturaEditarFormComponent } from './asignatura/forms/asignatura-editar-form/asignatura-editar-form.component';

import { FilterAsignaturaPipe } from 'src/app/pipes/filter-asignatura-pipe';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatStepperModule,
  MatDialogModule
]

@NgModule({
  declarations: [MainComponent, AsignaturaComponent, AsignaturaAgregarFormComponent, AsignaturaEditarFormComponent, FilterAsignaturaPipe],
  imports: [
    CommonModule,
    AsignaturasRoutingModule,
    FormsModule,ReactiveFormsModule,
    materialModules,
    Ng2SearchPipeModule
  ],
  exports: [
    materialModules
  ],
  providers: [
  ]
})
export class AsignaturasModule { }
