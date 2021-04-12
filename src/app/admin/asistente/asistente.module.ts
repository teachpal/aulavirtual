import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenteRoutingModule } from './asistente-routing.module';
import { CicloEscolarComponent } from './ciclo-escolar/ciclo-escolar.component';
import { NivelEducativoComponent } from './nivel-educativo/nivel-educativo.component';
import { PeriodoAcademicoComponent } from './periodo-academico/periodo-academico.component';
import { EscalaValorativaComponent } from './escala-valorativa/escala-valorativa.component';
import { RangoEvaluativoComponent } from './rango-evaluativo/rango-evaluativo.component';
import { GradosComponent } from './grados/grados.component';
import { GruposComponent } from './grupos/grupos.component';
import { MainComponent } from './main/main.component';

//Servicios
import { HttpClientModule } from '@angular/common/http';


//Forms
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
import { CicloEscolarFormComponent } from './ciclo-escolar/forms/ciclo-escolar-form/ciclo-escolar-form.component';
import { CicloEscolarFormActivarComponent } from './ciclo-escolar/forms/ciclo-escolar-form-activar/ciclo-escolar-form-activar.component';
import { EscalaValorativaFormComponent } from './escala-valorativa/forms/escala-valorativa-form/escala-valorativa-form.component';
import { RangoEvaluativoFormComponent } from './rango-evaluativo/forms/rango-evaluativo-form/rango-evaluativo-form.component';
import { RangoEvaluativoRemoveComponent } from './rango-evaluativo/forms/rango-evaluativo-form/rango-evaluativo-remove/rango-evaluativo-remove.component';

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
];

@NgModule({
  declarations: [CicloEscolarComponent, NivelEducativoComponent, PeriodoAcademicoComponent, EscalaValorativaComponent, RangoEvaluativoComponent, GradosComponent, GruposComponent, MainComponent, CicloEscolarFormComponent, CicloEscolarFormActivarComponent, EscalaValorativaFormComponent, RangoEvaluativoFormComponent, RangoEvaluativoRemoveComponent],
  imports: [
    CommonModule,
    AsistenteRoutingModule,
    FormsModule,ReactiveFormsModule,
    materialModules
  ],
  exports: [

    materialModules,

  ],

  providers: [
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AsistenteModule { }
