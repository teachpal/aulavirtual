import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AreaElement } from 'src/app/interfaces/area-element';
import { AsistenteAcademicoComponents } from 'src/app/Models/asistente-academico-components';
import { AreaService } from 'src/app/services/area-service';
import { ResponseService } from 'src/app/Models/response/response-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AreaFormComponent } from '../area/forms/area-form/area-form.component';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AreaEditarFormComponent } from './forms/area-editar-form/area-editar-form.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.sass']
})
export class AreaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['nombre', 'activo'];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ELEMENT_DATA_AREA: AreaElement[] = [];
  dataSourceAreas = new MatTableDataSource<AreaElement>();

  asistente = new AsistenteAcademicoComponents();
  selection = new SelectionModel<AreaElement>(false, []);

  areaForm: FormGroup;

  idArea = 0;
  nombreArea = '';
  activo = false;

  filterTerm: string;


  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _areaService: AreaService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.callGetAllAreas();
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
    this.resetAreaData();
    for (var areas in data.data) {
      let area: AreaElement = {
        activo: data.data[areas].activo,
        idArea: data.data[areas].idArea,
        nombreArea: data.data[areas].nombreArea
      };
      this.ELEMENT_DATA_AREA.push(area);
    }
    this.setupAreaData();
  }

  resetAreaData() {
    this.ELEMENT_DATA_AREA = [];
    this.setupAreaData();
  }

  setupAreaData() {
    this.dataSourceAreas = new MatTableDataSource(this.ELEMENT_DATA_AREA);
    this.dataSourceAreas.paginator = this.paginator;
    console.log('Datasource: ' + this.dataSourceAreas.data);
  }

  nuevo() {
    this.openDialogNuevo();
  }

  editar() {
    let area = {
      idArea: this.idArea,
      nombreArea: this.nombreArea,
      activo: this.activo
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = area;

    const dialogRef = this.dialog.open(AreaEditarFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.typeAction) {
          this.openSnackBar('Área editada con éxito', 'Ok');
          this.idArea = 0;
          this.callGetAllAreas();
        }
      }
    );
  }

  openDialogNuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Nuevo Area',
      //cicloEscolar: new RequestMmtoCicloEscolar(),
      accion: 'create'
    };

    const dialogRef = this.dialog.open(AreaFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.typeAction) {
          this.idArea = 0;
          this.openSnackBar('Area agregada con exito', 'Ok');
          this.callGetAllAreas();
        }
      }
    );
  }

  // notificaciones
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  seleccionarArea(row) {
    this.idArea = row.idArea;
    this.nombreArea = row.nombreArea;
    this.activo = row.activo;
    console.log(row);
  }

  filterChange(event) {
    console.log(event);
    let inputValue = event.target.value;
    if (inputValue != '') {
      let ELEMENT_DATA_AREA_TEMP = this.ELEMENT_DATA_AREA.filter(val => val.nombreArea.toString().toUpperCase().indexOf(inputValue.toString().toUpperCase()) >= 0);
      this.dataSourceAreas = new MatTableDataSource(ELEMENT_DATA_AREA_TEMP);
      this.dataSourceAreas.paginator = this.paginator;
    }
    else{
      this.dataSourceAreas = new MatTableDataSource(this.ELEMENT_DATA_AREA);
      this.dataSourceAreas.paginator = this.paginator;
    }
  }

}
