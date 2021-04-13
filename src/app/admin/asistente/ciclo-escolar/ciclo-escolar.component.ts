import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import { ComAsistenteEducativoService } from './../../../services/com-asistente-educativo.service';
import { CicloEscolarFormActivarComponent } from './forms/ciclo-escolar-form-activar/ciclo-escolar-form-activar.component';
import { RequestMmtoCicloEscolar } from './../../../Models/request/request-mmto-ciclo-escolar';
import { CicloEscolarFormComponent } from './forms/ciclo-escolar-form/ciclo-escolar-form.component';
import { RequestCicloEscolar } from "./../../../Models/request/request-ciclo-escolar";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Servicio } from "src/app/Models/servicio";
import { CampusService } from "src/app/services/campus.service";
import { CicloEscolarService } from "src/app/services/ciclo-escolar.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTable } from "@angular/material/table";
import { MatSelect } from "@angular/material/select";
import { MatDatepicker, MatDatepickerInputEvent } from "@angular/material/datepicker";
import { CicloEscolarElement } from "src/app/interfaces/ciclo-escolar-element";
import { AppDateAdapter, APP_DATE_FORMATS } from "src/app/utilerias/format-datepicker";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UsuarioStorageService } from 'src/app/services/seguridad/usuario-storage-service';

@Component({
  selector: "app-ciclo-escolar",
  templateUrl: "./ciclo-escolar.component.html",
  styleUrls: ["./ciclo-escolar.component.sass"],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})

export class CicloEscolarComponent implements OnInit {

  displayedColumns: string[] = [
    "idCicloEscolar",
    "nombreCiclo",
    "fechaInicio",
    "fechaFinal",
    "activo",
  ];

  //Variables para la consulta
  dataSource = new MatTableDataSource<CicloEscolarElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild("campusSelect") campusSelect: MatSelect;
  @ViewChild("finicio", { read: undefined, static: false })
  finicio: MatDatepicker<Date>;
  @ViewChild("ffin", { read: undefined, static: false })
  ffin: MatDatepicker<Date>;
  fechaSeleccionadaInicio: string = null;
  fechaSeleccionadaFinal: string = null;
  selection = new SelectionModel<CicloEscolarElement>(false, []);
  servicioCampus: Servicio;
  servicioCicloEscolar: Servicio;
  campusREST: any;
  cicloEscolarREST: any;
  campus: Servicio;
  ELEMENT_DATA: CicloEscolarElement[] = [];

  public cicloEscolarActual = new RequestMmtoCicloEscolar();
  public indiceActual: any;
  public IdRegistroSeleccionado = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public asistente = new AsistenteAcademicoComponents();
  usuarioActual

  constructor(private _campusService: CampusService, private _cicloEscolarService: CicloEscolarService,
     private dialog: MatDialog, private _snackBar: MatSnackBar, private servicioComunicacion: ComAsistenteEducativoService, private usuarioStorageService: UsuarioStorageService) {
      this.usuarioStorageService.currentUserObservable.subscribe(data => {
          this.usuarioActual = data;
      });
  }

  ngOnInit(): void {
    this.servicioComunicacion.enviarAsistenteObservable.subscribe(asistente => {
      this.asistente = asistente;
    });
    this.asistente.idCampus = this.usuarioActual.idCampus;
    this.enviarAsistente(this.asistente);
  }

  enviarAsistente(asistente: AsistenteAcademicoComponents) {
    this.servicioComunicacion.enviarAsistente(asistente);
  }

  //#region  Dialogos
  openDialogNuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Nuevo Ciclo Escolar',
      cicloEscolar: new RequestMmtoCicloEscolar(),
      accion: 'create'
    };

    const dialogRef = this.dialog.open(CicloEscolarFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          if ( data.isSubmit ){
            var cicloMmto = new RequestMmtoCicloEscolar();
            if (data.typeAction === 'create'){
                cicloMmto.activo = false;
                cicloMmto.idCampus = this.usuarioActual.idCampus;
                cicloMmto.idCicloEscolar = 0;
                cicloMmto.fechaInicio = data.data.fechaInicio.value.toISOString().substring(0, 10);
                cicloMmto.fechaFinal = data.data.fechaFinal.value.toISOString().substring(0, 10);
                this.postCicloEscolar(cicloMmto);
            }
          }
        }
    );
  }

  openDialogModificar(cicloEscolarActual: RequestMmtoCicloEscolar) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Modificar Ciclo Escolar',
      cicloEscolar: cicloEscolarActual,
      accion: 'update'
    };

    const dialogRef = this.dialog.open(CicloEscolarFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if ( data.isSubmit ){
          const fi =  data.data.fechaInicio.value;
          const ff =  data.data.fechaFinal.value;

          var cicloMmto = new RequestMmtoCicloEscolar();
          if (data.typeAction === 'update'){
              cicloMmto.activo = cicloEscolarActual.activo;
              cicloMmto.idCampus = cicloEscolarActual.idCampus;
              cicloMmto.idCicloEscolar = cicloEscolarActual.idCicloEscolar;
              cicloMmto.fechaInicio = data.data.fechaInicio.value.toISOString().substring(0, 10);
              cicloMmto.fechaFinal = data.data.fechaFinal.value.toISOString().substring(0, 10);
              this.putCicloEscolar(cicloMmto);
          }
        }
      }
  );
  }

  openDialogActivar(cicloEscolarActual: RequestMmtoCicloEscolar){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Activar Ciclo Escolar',
      cicloEscolar: cicloEscolarActual
    };

    const dialogRef = this.dialog.open(CicloEscolarFormActivarComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if ( data.isSubmit ){
          var cicloMmto = new RequestMmtoCicloEscolar();
          if (data.typeAction === 'activate'){
              cicloMmto.activo = true;
              cicloMmto.idCampus = this.cicloEscolarActual.idCampus;
              cicloMmto.idCicloEscolar = this.cicloEscolarActual.idCicloEscolar;
              cicloMmto.fechaInicio = this.cicloEscolarActual.fechaInicio;
              cicloMmto.fechaFinal = this.cicloEscolarActual.fechaFinal;
              this.putCicloEscolar(cicloMmto);
          }
        }
      }
  );
  }
  //#endregion

  //#region Mantenimiento
  postCicloEscolar(ciclo: RequestMmtoCicloEscolar){
    return this._cicloEscolarService.postCicloEscolar(ciclo).subscribe(res => {
      if (res.errorId === 0){
        this.openSnackBar('Se guardo ciclo escolar con éxito', 'Ignorar');
        this.getCiclosEscolares();
      }else{
        this.openSnackBar('Ocurrió un problema al guardar ciclo escolar', 'Ignorar');
      }
    });
  }

  putCicloEscolar(ciclo: RequestMmtoCicloEscolar){
    return this._cicloEscolarService.putCicloEscolar(ciclo).subscribe(res => {
      if (res.errorId === 0){
        this.openSnackBar('Se modifico ciclo escolar con exito', 'Ignorar');
        this.getCiclosEscolares();
      }else{
        this.openSnackBar('Ocurrió un problema al modificar ciclo escolar ' + res.errorMessage , 'Ignorar');
      }
    });
  }

  buscarRegistroSeleccionado(id: number){
    if ( id === this.IdRegistroSeleccionado){
      this.IdRegistroSeleccionado = 0;
      this.asistente.nombreCicloEscolar = '';
      this.asistente.cicloEscolarStatus = false;
    }else{
      if ( id > 0 ){
        this.IdRegistroSeleccionado = id;
        this.indiceActual = this.servicioCicloEscolar.data.findIndex(ciclo => ciclo.idCicloEscolar === id);
        this.cicloEscolarActual = this.servicioCicloEscolar.data[this.indiceActual];
        this.asistente.nombreCicloEscolar = this.servicioCicloEscolar.data[this.indiceActual].nombreCicloEscolar;
        this.asistente.cicloEscolarStatus = this.servicioCicloEscolar.data[this.indiceActual].activo;
        this.asistente.resetGrid = true;
      }else{
        this.IdRegistroSeleccionado = 0;
        this.asistente.nombreCicloEscolar = '';
        this.asistente.cicloEscolarStatus = false;
      }
    }

    this.asistente.idCicloEscolar = this.IdRegistroSeleccionado;
    this.asistente.idNivelEducativo = 0;
    this.asistente.idRangoEvaluativo = 0;
    this.enviarAsistente(this.asistente);
  }
  //#endregion

  //#region  Acciones
   buscar(){
    this.IdRegistroSeleccionado = 0;
    this.asistente.nombreCicloEscolar = '';
    this.asistente.cicloEscolarStatus = false;
    this.getCiclosEscolares();
  }

  nuevo(){
    this.openDialogNuevo();
    this.IdRegistroSeleccionado = 0;
  }

  editar(){
      this.openDialogModificar(this.cicloEscolarActual);
      this.IdRegistroSeleccionado = 0;
  }

  activar(){
    this.openDialogActivar(this.cicloEscolarActual);
    this.IdRegistroSeleccionado = 0;
  }
  //#endregion

 //#region  Notificaciones
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
 //#endregion

  //#region  Consultas

  getAllCampus() {
    this.servicioCampus = new Servicio();
    this._campusService.getCampus().subscribe((data) => {
      this.campusREST = data;
      this.servicioCampus.data = this.campusREST.data;
      this.servicioCampus.errorId = this.campusREST.errorId;
      this.servicioCampus.errorMessage = this.campusREST.errorMessage;
      this.servicioCampus.token = this.campusREST.token;
    });
    return this.servicioCampus;
  }

  getCiclosEscolares() {
    const request = new RequestCicloEscolar();
    request.IdCampus = this.usuarioActual.idCampus;
    request.pToken = "token";
    request.FechaInicio = this.fechaSeleccionadaInicio;
    request.FechaFinal = this.fechaSeleccionadaFinal;
    console.log('Get ciclos escolares');
    return this._cicloEscolarService.getCicloEscolar(request).subscribe((data: {}) => {
      this.cicloEscolarREST = data;
      this.servicioCicloEscolar = new Servicio();
      this.servicioCicloEscolar.data = this.cicloEscolarREST.data;
      this.servicioCicloEscolar.errorId = this.cicloEscolarREST.errorId;
      this.servicioCicloEscolar.errorMessage = this.cicloEscolarREST.errorMessage;
      this.servicioCicloEscolar.token = this.cicloEscolarREST.token;
      this.ELEMENT_DATA = this.servicioCicloEscolar.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
 //#endregion

 //#region EventosChange
  changeFechaInicio(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaSeleccionadaInicio = event.value.toISOString().substring(0, 10);
  }

  changeFechaFinal(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaSeleccionadaFinal = event.value.toISOString().substring(0, 10);
  }

  changeIdCampus(idCampus: number){
    this.asistente.idCampus = idCampus;
    this.asistente.idCicloEscolar = 0;
    this.enviarAsistente(this.asistente);
  }

 //#endregion

}
