import { RequestMmtoCicloEscolar } from './../../../../../Models/request/request-mmto-ciclo-escolar';
import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-ciclo-escolar-form',
  templateUrl: './ciclo-escolar-form.component.html',
  styleUrls: ['./ciclo-escolar-form.component.sass']
})
export class CicloEscolarFormComponent implements OnInit {

  public cicloEscolar =  new RequestMmtoCicloEscolar();
  public title = '';
  public action = '';
  public nombreCicloEscolar = '';
  fechaInicio =  new FormControl();
  fechaFinal =  new FormControl();

  //Manipulacion de datos
  public fecha_i: string = '';
  public fecha_f: string = '';

  formIsValid = false;

  constructor(private dialogRef: MatDialogRef<CicloEscolarFormComponent>, @Inject(MAT_DIALOG_DATA) data ) {
    this.cicloEscolar = data.cicloEscolar;
    this.title = data.titulo;
    this.action = data.accion;
    if (this.action === 'update'){
      this.nombreCicloEscolar =  ( this.cicloEscolar.fechaInicio === undefined && this.cicloEscolar.fechaFinal === undefined ) ? '' :
      this.cicloEscolar.fechaInicio.substring(0, 4) + '-' + this.cicloEscolar.fechaFinal.substring(0, 4);
      this.fechaInicio = new FormControl(new Date(this.cicloEscolar.fechaInicio.substring(0, 10)), Validators.required);
      this.fechaFinal =  new FormControl(new Date(this.cicloEscolar.fechaFinal.substring(0, 10)), Validators.required);
      this.compararFechasOnInit();
    }
  }

  ngOnInit() {

  }

  guardar(){
    var response = {
      isSubmit: true,
      data: {
        fechaInicio: this.fechaInicio,
        fechaFinal: this.fechaFinal,
      },
      typeAction: this.action
    };

    this.dialogRef.close(response);
  }

  close() {
    var response = {
      isSubmit: false,
      typeAction: this.action
    };

    this.dialogRef.close(response);
  }

  changeFechaInicio(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fecha_i = event.value.toISOString().substring(0, 10);
    this.compararFechasOnChanges();
  }

  changeFechaFinal(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fecha_f = event.value.toISOString().substring(0, 10);
    this.compararFechasOnChanges();
  }

  compararFechasOnInit(){
    const fi  = new Date(this.cicloEscolar.fechaInicio.substring(0, 10));
    const ff  = new Date(this.cicloEscolar.fechaFinal.substring(0, 10));

    console.log(fi.getTime(), ff.getTime());
    if (fi.getTime() < ff.getTime()) {
      this.formIsValid = true;
    }else{
      this.formIsValid = false;
    }
  }

  compararFechasOnChanges(){
    let fi;
    let ff;

    if (this.action === 'update'){
      fi = new Date((this.fecha_i === '' ? this.cicloEscolar.fechaInicio.substring(0, 10) : this.fecha_i));
      ff = new Date((this.fecha_f === '' ? this.cicloEscolar.fechaFinal.substring(0, 10) : this.fecha_f));
      console.log(fi.getTime(), ff.getTime());
    }else{
      fi  =  new Date(this.fecha_i);
      ff  = new Date(this.fecha_f);
    }

    if (fi.getTime() < ff.getTime()) {
      this.formIsValid = true;
    }else{
      this.formIsValid = false;
    }
  }

}
