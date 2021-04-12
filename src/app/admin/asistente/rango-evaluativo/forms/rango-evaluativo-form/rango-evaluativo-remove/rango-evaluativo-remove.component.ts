import { EscalaValorativaFormComponent } from './../../../../escala-valorativa/forms/escala-valorativa-form/escala-valorativa-form.component';
import { RequestMmtoRangoEvaluativo } from './../../../../../../Models/request/request-mmto-rango-evaluativo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-rango-evaluativo-remove',
  templateUrl: './rango-evaluativo-remove.component.html',
  styleUrls: ['./rango-evaluativo-remove.component.sass']
})
export class RangoEvaluativoRemoveComponent implements OnInit {
  public form: FormGroup;
  public rangoValorativo = new RequestMmtoRangoEvaluativo();
  public title = '';
  public action = '';
  public listaColores : any;
  public nombreRangoEvaluativo: string;
  public abreviatura: string;
  public valorMinimo: string;
  public valorMaximo: string;
  public idColor: number;
  public aprobado: boolean;
  public colorWhite = '#000000';

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<RangoEvaluativoRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.rangoValorativo = data.data;
    this.title = data.titulo;
    this.action = data.accion;
    this.listaColores = data.listaColores;
    this.nombreRangoEvaluativo = data.rangoEvaluativo.nombreRangoEvaluativo;
    this.abreviatura = data.rangoEvaluativo.abreviatura;
    this.valorMinimo = data.rangoEvaluativo.valorMinimo;
    this.valorMaximo = data.rangoEvaluativo.valorMaximo;
    this.idColor = data.rangoEvaluativo.idColor;
    this.aprobado = data.rangoEvaluativo.aprobado;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreRangoEvaluativo: [this.nombreRangoEvaluativo, Validators.required],
      abreviatura: [this.abreviatura, Validators.required],
      valorMinimo: [this.valorMinimo, Validators.required],
      valorMaximo: [this.valorMaximo, Validators.required],
      idColor: [this.idColor, Validators.required],
      aprobado: [this.aprobado]
    });
  }

  getColor(id: number){
    let index = this.listaColores.findIndex(color => color.idColor === id);
    return (index >= 0) ?  this.listaColores[index].hexadecimal : '#FFFFFF';
   }

  setColor(id: number){
    this.idColor = id;
  }

  remove(){
  var response = {
    isSubmit: true,
    data: this.form.value,
    typeAction: this.action
  };

    this.dialogRef.close(response);
  }

  close(){
    var response = {
      isSubmit: false,
      typeAction: this.action
    };

    this.dialogRef.close(response);
  }

}
