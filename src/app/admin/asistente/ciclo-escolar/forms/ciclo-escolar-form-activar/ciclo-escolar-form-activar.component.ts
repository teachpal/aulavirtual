import { RequestMmtoCicloEscolar } from './../../../../../Models/request/request-mmto-ciclo-escolar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-escolar-form-activar',
  templateUrl: './ciclo-escolar-form-activar.component.html',
  styleUrls: ['./ciclo-escolar-form-activar.component.sass']
})
export class CicloEscolarFormActivarComponent implements OnInit {

  public cicloEscolar =  new RequestMmtoCicloEscolar();
  public title = '';
  public action = 'activate';
  public nombreCicloEscolar = '';

  constructor(private dialogRef: MatDialogRef<CicloEscolarFormActivarComponent>,
              @Inject(MAT_DIALOG_DATA) data ) {
    this.cicloEscolar = data.cicloEscolar;
    this.title = data.titulo;
   }

  ngOnInit(): void {
    this.nombreCicloEscolar =  ( this.cicloEscolar.fechaInicio === undefined && this.cicloEscolar.fechaFinal === undefined ) ? '' :
    this.cicloEscolar.fechaInicio.substring(0, 4) + '-' + this.cicloEscolar.fechaFinal.substring(0, 4);
  }

  activar(){
    var response = {
      isSubmit: true,
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

}
