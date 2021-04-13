import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { RequestMmtoEscalaValorativa } from 'src/app/Models/request/request-mmto-escala-valorativa';

@Component({
  selector: 'app-escala-valorativa-form',
  templateUrl: './escala-valorativa-form.component.html',
  styleUrls: ['./escala-valorativa-form.component.sass']
})
export class EscalaValorativaFormComponent implements OnInit {

  public escalaValorativa = new RequestMmtoEscalaValorativa();
  public title = '';
  public action = '';
  public valorMinimo = '';
  public valorMaximo = '';
  public formIsValid = false;

  constructor(private dialogRef: MatDialogRef<EscalaValorativaFormComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.escalaValorativa = data.data;
    this.title = data.title;
    this.action = data.action;
  }

  ngOnInit(): void {
  }

  close(){
    const response = {
      isSubmit: false,
      typeAction: this.action
    };

    this.dialogRef.close(response);
  }

  save(){
    const response = {
      isSubmit: true,
      typeAction: this.action,
      data: {
        valorMinimo: this.valorMinimo,
        valorMaximo:  this.valorMaximo
      }
    };

    this.dialogRef.close(response);
  }

  validate(){

  }
}
