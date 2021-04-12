import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResponseService } from 'src/app/Models/response/response-service';
import { AreaService } from 'src/app/services/area-service';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.sass']
})
export class AreaFormComponent implements OnInit {
  areaForm: FormGroup;
  public action = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AreaFormComponent>,
    private _areaService: AreaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data) {
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

  guardarArea() {
    let areaRequest = {
      nombreArea: (this.areaForm.controls['nombre'].value).toString().toUpperCase(),
      activo: this.areaForm.controls['activar'].value
    };
    console.log(areaRequest);
    this._areaService.post(areaRequest).subscribe({
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

  setupFormAgregar() {
    this.areaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      activar: new FormControl(false)
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
