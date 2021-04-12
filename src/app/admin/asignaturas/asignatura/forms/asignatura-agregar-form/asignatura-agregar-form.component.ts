import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AreaService } from 'src/app/services/area-service';
import { AsignaturaService } from 'src/app/services/asignatura-service';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ResponseService } from 'src/app/Models/response/response-service';
import { MatSelect } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asignatura-agregar-form',
  templateUrl: './asignatura-agregar-form.component.html',
  styleUrls: ['./asignatura-agregar-form.component.sass']
})
export class AsignaturaAgregarFormComponent implements OnInit {
  areaForm: FormGroup;
  public action = false;
  ELEMENT_DATA_AREA = [];
  @ViewChild("areaSelect") areaSelect: MatSelect;
  idArea: number;
  idAsignatura: number;
  nombreAsignatura: string;
  abreviatura: string;
  activo: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private _areaService: AreaService,
    private _asignaturaService: AsignaturaService,
    @Inject(MAT_DIALOG_DATA) data,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AsignaturaAgregarFormComponent>) {
      this.idArea = data.idArea;
      this.idAsignatura = data.idAsignatura;
      this.nombreAsignatura = data.nombreAsignatura;
      this.abreviatura = data.abreviatura;
     }

  ngOnInit(): void {
    this.setupFormAgregar();
    this.callGetAllAreas();
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

  setupFormAgregar() {
    this.areaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      abreviatura: ['', Validators.required],
      activar: new FormControl(false),
      idArea: ['', Validators.required]
    });
    console.log(this.areaForm);
  }

  guardarAsignatura() {
    let asignaturaRequest = {
      nombreAsignatura: (this.areaForm.controls['nombre'].value).toString().toUpperCase(),
      activo: this.areaForm.controls['activar'].value,
      idArea: this.areaForm.controls['idArea'].value,
      abreviatura: (this.areaForm.controls['abreviatura'].value).toString().toUpperCase()
    };
    console.log(asignaturaRequest);
    this._asignaturaService.post(asignaturaRequest).subscribe({
      next: (data: ResponseService) => {
        console.log(data)
        if (data.errorId != 0) {
          this.openSnackBar('No se pudo guardar la información', 'OK');
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
