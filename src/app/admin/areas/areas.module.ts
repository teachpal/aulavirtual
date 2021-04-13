import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { MainComponent } from './main/main.component';
import { AreaComponent } from './area/area.component';

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

import {AreaFormComponent} from 'src/app/admin/areas/area/forms/area-form/area-form.component';
import { AreaEditarFormComponent } from './area/forms/area-editar-form/area-editar-form.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterAreaPipe } from 'src/app/pipes/filter-area-pipe';

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
  declarations: [MainComponent, AreaComponent, AreaFormComponent, AreaEditarFormComponent, FilterAreaPipe],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,ReactiveFormsModule,
    materialModules,
    Ng2SearchPipeModule,
  ],
  exports: [
    materialModules,

  ],
  providers: []
})
export class AreasModule { }
