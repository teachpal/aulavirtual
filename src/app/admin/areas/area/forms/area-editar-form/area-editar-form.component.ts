import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm, FormGroupDirective } from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResponseService } from 'src/app/Models/response/response-service';
import { AreaService } from 'src/app/services/area-service';


@Component({
  selector: 'app-area-editar-form',
  templateUrl: './area-editar-form.component.html',
  styleUrls: ['./area-editar-form.component.sass']
})
export class AreaEditarFormComponent implements OnInit {
  areaForm: FormGroup;
  public action = false;
  idArea = 0;
  nombreArea = '';
  activo = false;
  matcher;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AreaEditarFormComponent>,
    private _snackBar: MatSnackBar,
    private _areaService: AreaService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.idArea = data.idArea;
    this.nombreArea = data.nombreArea;
    this.activo = data.activo;
    this.setupFormAgregar();
  }

  ngOnInit(): void {
    console.log('Area form component ng On init');
  }

  closeModal(isSubmit, typeAction) {
    var response = {
      isSubmit: isSubmit,
      typeAction: typeAction
    };

    this.dialogRef.close(response);
  }

  actualizarArea() {
    let area = {
      idArea: this.idArea,
      nombreArea: (this.areaForm.controls['nombre'].value).toString().toUpperCase(),
      activo: this.areaForm.controls['activar'].value
    };
    this._areaService.put(area).subscribe({
      next: (data: ResponseService) => {
        console.log(data)
        if (data.errorId != 0) {
          this.openSnackBar('No se pudieron guardar los datos', '');
        }
        else {
          this.closeModal(true, true);
        }
      },
      error: error => {
        this.openSnackBar('No se pudieron guardar los datos', 'Ok');
        console.log(error);
      }
    });

  }

  setupFormAgregar() {
    this.areaForm = this.formBuilder.group({
      nombre: [this.nombreArea, Validators.required],
      activar: new FormControl(this.activo)
    });
    console.log(this.areaForm);

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
