import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AsignaturaElement } from 'src/app/interfaces/asignatura-element';
import { AsistenteAcademicoComponents } from 'src/app/Models/asistente-academico-components';
import { AsignaturaAgregarFormComponent } from '../asignatura/forms/asignatura-agregar-form/asignatura-agregar-form.component';
import { AsignaturaEditarFormComponent } from '../asignatura/forms/asignatura-editar-form/asignatura-editar-form.component';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AsignaturaService } from 'src/app/services/asignatura-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResponseService } from 'src/app/Models/response/response-service';
import { AreaService } from 'src/app/services/area-service';
import { MatSelect } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.sass']
})
export class AsignaturaComponent implements OnInit {
  @ViewChild("areaSelect") areaSelect: MatSelect;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['nombreAsignatura', 'abreviatura', 'area', 'activo'];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ELEMENT_DATA_ASIGNATURA: AsignaturaElement[] = [];
  ELEMENT_DATA_AREA = [];
  dataSourceAsignatura = new MatTableDataSource<AsignaturaElement>();

  asistente = new AsistenteAcademicoComponents();
  selection = new SelectionModel<AsignaturaElement>(false, []);

  idAsignatura: number = 0;
  idArea: number;
  nombreAsignatura: string;
  abreviatura: string;
  activo: boolean;
  filterTerm: string;

  constructor(private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _asignaturaService: AsignaturaService,
    private _areaService: AreaService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.callGetAllAsignaturas();
    this.callGetAllAreas();
    let usuario = sessionStorage.getItem('usuario');
    console.log('Desde session sotrage: ' + usuario);
  }

  nuevo() {
    this.openDialogNuevo();
  }

  openDialogNuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Nuevo Asignatura',
      //cicloEscolar: new RequestMmtoCicloEscolar(),
      accion: 'create'
    };

    const dialogRef = this.dialog.open(AsignaturaAgregarFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.typeAction) {
          this.idAsignatura = 0;
          this.idArea = 0;
          this.openSnackBar('Asignatura agregada con exito', 'Ok');
          this.callGetAllAreas();
          this.callGetAllAsignaturas();
        }
      }
    );
  }

  editar() {
    let area = {
      idArea: this.idArea,
      idAsignatura: this.idAsignatura,
      activo: this.activo,
      abreviatura: this.abreviatura,
      nombreAsignatura: this.nombreAsignatura
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = area;

    const dialogRef = this.dialog.open(AsignaturaEditarFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.typeAction) {
          this.openSnackBar('Asignatura editada con éxito', 'Ok');
          this.idAsignatura = 0;
          this.idArea = 0;
          this.callGetAllAsignaturas();
          this.callGetAllAreas();
        }
      }
    );
  }

  callGetAllAsignaturas() {
    this._asignaturaService.getllAsignaturas().subscribe({
      next: data => {
        console.log(data);
        this.setAsignaturas(data);
      },
      error: error => {

      }
    })
  }

  callGetAllAreas() {
    this._areaService.getllAreas().subscribe({
      next: data => {
        console.log(data);
        this.setAreas(data);
      }
    })
  }

  setAsignaturas(data: ResponseService) {
    this.resetAsignaturas();
    for (var asignaturas in data.data) {
      let asignatura: AsignaturaElement = {
        abreviatura: data.data[asignaturas].abreviatura,
        idArea: data.data[asignaturas].idArea,
        idAsignatura: data.data[asignaturas].idAsignatura,
        nombreAsignatura: data.data[asignaturas].nombreAsignatura,
        activo: data.data[asignaturas].activo,
        nombreArea: data.data[asignaturas].nombreArea
      };
      this.ELEMENT_DATA_ASIGNATURA.push(asignatura);
    }
    this.setupAsignaturaData();
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

  resetAsignaturas() {
    this.ELEMENT_DATA_ASIGNATURA = [];
    this.setupAsignaturaData();
  }

  setupAsignaturaData() {
    this.dataSourceAsignatura = new MatTableDataSource(this.ELEMENT_DATA_ASIGNATURA);
    this.dataSourceAsignatura.paginator = this.paginator;
  }

  seleccionarAsignatura(row) {
    this.idArea = row.idArea;
    this.idAsignatura = row.idAsignatura;
    this.activo = row.activo;
    this.abreviatura = row.abreviatura;
    this.nombreAsignatura = row.nombreAsignatura;
    console.log(row);
  }

  setIdArea(idArea) {
    this.idAsignatura = 0;
    if (idArea == 0) {
      this.callGetAllAsignaturas();
    }
    else {
      let ELEMENT_DATA_ASIGNATURA_TEMP = this.ELEMENT_DATA_ASIGNATURA.filter(x => x.idArea == idArea);
      this.dataSourceAsignatura = new MatTableDataSource(ELEMENT_DATA_ASIGNATURA_TEMP);
      this.dataSourceAsignatura.paginator = this.paginator;
    }

  }

  // notificaciones
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  filterChange(event) {
    let inputValue = event.target.value;
    if (inputValue != '') {
      let ELEMENT_DATA_ASIGNATURA_TEMP = this.ELEMENT_DATA_ASIGNATURA.filter(val => {
        return val.nombreAsignatura.toString().toUpperCase().indexOf(inputValue.toString().toUpperCase()) >= 0 ||
          val.abreviatura.toString().toUpperCase().indexOf(inputValue.toString().toUpperCase()) >= 0
      });
      this.dataSourceAsignatura = new MatTableDataSource(ELEMENT_DATA_ASIGNATURA_TEMP);
      this.dataSourceAsignatura.paginator = this.paginator;
    }
    else {
      this.dataSourceAsignatura = new MatTableDataSource(this.ELEMENT_DATA_ASIGNATURA);
      this.dataSourceAsignatura.paginator = this.paginator;
    }

  }

}
