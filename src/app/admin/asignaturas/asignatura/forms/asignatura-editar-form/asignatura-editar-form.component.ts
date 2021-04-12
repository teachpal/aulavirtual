import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AreaService } from 'src/app/services/area-service';
import { AsignaturaService } from 'src/app/services/asignatura-service';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ResponseService } from 'src/app/Models/response/response-service';
import { MatSelect } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asignatura-editar-form',
  templateUrl: './asignatura-editar-form.component.html',
  styleUrls: ['./asignatura-editar-form.component.sass']
})
export class AsignaturaEditarFormComponent implements OnInit {
  @ViewChild("areaSelect") areaSelect: MatSelect;
  areaForm: FormGroup;
  public action = false;

  idArea: number;
  idAsignatura: number;
  nombreAsignatura: string;
  abreviatura: string;
  activo: boolean;

  ELEMENT_DATA_AREA = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private formBuilder: FormBuilder,
    private _areaService: AreaService,
    private _asignaturaService: AsignaturaService,
    @Inject(MAT_DIALOG_DATA) data,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AsignaturaEditarFormComponent>) {
    this.idArea = data.idArea;
    this.idAsignatura = data.idAsignatura;
    this.nombreAsignatura = data.nombreAsignatura;
    this.abreviatura = data.abreviatura;
    this.activo = data.activo;
  }

  ngOnInit(): void {
    this.callGetAllAreas();
    this.setupFormEditar();
  }

  closeModal(isSubmit, typeAction) {
    var response = {
      isSubmit: isSubmit,
      typeAction: typeAction
    };

    this.dialogRef.close(response);
  }

  callGetAllAreas() {
    this._areaService.getllAreas().subscribe({
      next: data => {
        console.log(data);
        this.setAreas(data);
      }
    })
  }

  setAreas(data: ResponseService) {
    this.ELEMENT_DATA_AREA = [];
    for (var areas in data.data) {
      let area = {
        activo: data.data[areas].activo,
        idArea: data.data[areas].idArea,
        nombreArea: data.data[areas].nombreArea
      };
      this.ELEMENT_DATA_AREA.push(area);
    }
  }

  setupFormEditar() {
    this.areaForm = this.formBuilder.group({
      nombre: [this.nombreAsignatura, Validators.required],
      abreviatura: [this.abreviatura, Validators.required],
      activar: new FormControl(this.activo),
      idArea: [this.idArea, Validators.required]
    });
    console.log(this.areaForm);
  }

  editarAsignatura() {
    let asignaturaRequest = {
      nombreAsignatura: (this.areaForm.controls['nombre'].value).toString().toUpperCase(),
      activo: this.areaForm.controls['activar'].value,
      idArea: this.areaForm.controls['idArea'].value,
      abreviatura: (this.areaForm.controls['abreviatura'].value).toString().toUpperCase(),
      idAsignatura: this.idAsignatura
    };
    console.log(asignaturaRequest);
    this._asignaturaService.put(asignaturaRequest).subscribe({
      next: (data: ResponseService) => {
        console.log(data)
        if (data.errorId != 0) {

        }
        else {
          this.closeModal(true, true);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
