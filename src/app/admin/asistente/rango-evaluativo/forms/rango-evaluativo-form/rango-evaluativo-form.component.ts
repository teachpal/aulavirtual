import { EscalaValorativaInterface } from './../../../../../interfaces/escala-valorativa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EscalaValorativaFormComponent } from './../../../escala-valorativa/forms/escala-valorativa-form/escala-valorativa-form.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestMmtoRangoEvaluativo } from './../../../../../Models/request/request-mmto-rango-evaluativo';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-rango-evaluativo-form',
  templateUrl: './rango-evaluativo-form.component.html',
  styleUrls: ['./rango-evaluativo-form.component.sass']
})
export class RangoEvaluativoFormComponent implements OnInit {

  public form: FormGroup;
  public rangoValorativo = new RequestMmtoRangoEvaluativo();
  public title = '';
  public action = '';
  public listaColores: any;
  public nombreRangoEvaluativo: string;
  public abreviatura: string;
  public valorMinimo: string;
  public valorMaximo: string;
  public idColor: number;
  public aprobado: boolean;
  public colorWhite = '#000000';
  public escala: EscalaValorativaInterface;
  public valueMinIsValid = false;
  public valueMaxIsValid = false;
  public letras = [
    {letra: 'a', valor: 6},
    {letra: 'A', valor: 6},
    {letra: 'b', valor: 5},
    {letra: 'B', valor: 5},
    {letra: 'c', valor: 4},
    {letra: 'C', valor: 4},
    {letra: 'd', valor: 3},
    {letra: 'D', valor: 3},
    {letra: 'e', valor: 2},
    {letra: 'E', valor: 2},
    {letra: 'f', valor: 1},
    {letra: 'F', valor: 1},
  ];

  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder, private dialogRef: MatDialogRef<EscalaValorativaFormComponent>,
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
    this.escala = data.escala;
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

    if(this.escala.idTipoEscalaValorativa === 1){
      this.isValidMyMinNumber();
      this.isValidMyMaxNumber();
    }else{
      this.isValidMyMinLetter();
      this.isValidMyMaxLetter();
    }
  }

  getColor(id: number){
    let index = this.listaColores.findIndex(color => color.idColor === id);
    return (index >= 0) ?  this.listaColores[index].hexadecimal : '#FFFFFF';
   }

  setColor(id: number){
    this.idColor = id;
  }

  save(){
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.isValidMyMinNumber();
      this.isValidMyMaxNumber();
      return false;
    }
    return true;
  }

  ABCDEFOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 64 && charCode < 71 || charCode > 96 && charCode < 103 ) {
      this.isValidMyMinLetter();
      this.isValidMyMaxLetter();
      return true;
    }
    return false;
  }

  isValidMyMinNumber(){
    if(Number(this.form.value.valorMaximo) > Number(this.form.value.valorMinimo) && Number(this.form.value.valorMinimo) >= Number(this.escala.valorMinimo) && Number(this.form.value.valorMinimo) <= Number(this.escala.valorMaximo)){
      this.valueMinIsValid = true;
    }else{
      this.valueMinIsValid = false;
    }
    this.cd.markForCheck();
  }

  isValidMyMaxNumber(){
    if(Number(this.form.value.valorMaximo) > Number(this.form.value.valorMinimo) && Number(this.form.value.valorMaximo) >= Number(this.escala.valorMinimo) && Number(this.form.value.valorMaximo) <= Number(this.escala.valorMaximo)){
      this.valueMaxIsValid = true;
    }else{
      this.valueMaxIsValid = false;
    }
    this.cd.markForCheck();
  }

  isValidMyMinLetter(){
    if(Number(this.getValueLetter(this.form.value.valorMinimo)) >= Number(this.getValueLetter(this.escala.valorMinimo)) && Number(this.getValueLetter(this.form.value.valorMinimo)) <= Number(this.getValueLetter(this.escala.valorMaximo))){
      this.valueMinIsValid = true;
    }else{
      this.valueMinIsValid = false;
    }
    this.cd.markForCheck();
  }

  isValidMyMaxLetter(){
    if(Number(this.getValueLetter(this.form.value.valorMaximo)) >= Number(this.getValueLetter(this.escala.valorMinimo)) && Number(this.getValueLetter(this.form.value.valorMaximo)) <= Number(this.getValueLetter(this.escala.valorMaximo))){
      this.valueMaxIsValid = true;
    }else{
      this.valueMaxIsValid = false;
    }
    this.cd.markForCheck();
  }

  getValueLetter(letter: string){
    const index = this.letras.findIndex(letra => letra.letra === letter);
    if(index > 0){
      return this.letras[index].valor;
    }
    return 0;
  }
}
