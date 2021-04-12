import { EscalaValorativaInterface } from './../../../interfaces/escala-valorativa';
import { RequestEscalaValorativa } from './../../../Models/request/request-escala-valorativa';
import { EscalaValorativaService } from './../../../services/escala-valorativa.service';
import { RangoEvaluativoRemoveComponent } from './forms/rango-evaluativo-form/rango-evaluativo-remove/rango-evaluativo-remove.component';
import { ColorInterface } from './../../../interfaces/color-interface';
import { NivelEducativoService } from "src/app/services/nivel-educativo.service";
import { NivelEducativoElement } from "src/app/interfaces/nivel-educativo-element";
import { SelectionModel } from "@angular/cdk/collections";
import { RequestRangoEvaluativo } from "./../../../Models/request/request-rango-evaluativo";
import { RangoEvaluativoInterface } from "./../../../interfaces/rango-evaluativo";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import {
  Rango,
  RequestMmtoRangoEvaluativo,
} from "./../../../Models/request/request-mmto-rango-evaluativo";
import { AsistenteAcademicoComponents } from "./../../../Models/asistente-academico-components";
import { RangoEvaluativoService } from "./../../../services/rango-evaluativo.service";
import { ComAsistenteEducativoService } from "src/app/services/com-asistente-educativo.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RangoEvaluativoFormComponent } from "./forms/rango-evaluativo-form/rango-evaluativo-form.component";
import { Servicio } from "src/app/Models/servicio";

@Component({
  selector: "app-rango-evaluativo",
  templateUrl: "./rango-evaluativo.component.html",
  styleUrls: ["./rango-evaluativo.component.sass"],
})
export class RangoEvaluativoComponent implements OnInit {
  //#region Variables
  public horizontalPosition: MatSnackBarHorizontalPosition = "center";
  public verticalPosition: MatSnackBarVerticalPosition = "top";
  public asistente = new AsistenteAcademicoComponents();
  public dataSource = new MatTableDataSource<RangoEvaluativoInterface>();
  public dataSourceNivelEducativo = new MatTableDataSource<EscalaValorativaInterface>();
  public listaColores: ColorInterface[] = [];
  public dataTable: RangoEvaluativoInterface[] = [];
  public dataTableToPost: RangoEvaluativoInterface[] = [];
  public dataTableColors: ColorInterface[] = [];
  public ELEMENT_DATA_NIVELEDUCATIVO: EscalaValorativaInterface[] = [];
  public selectionRango = new SelectionModel<RangoEvaluativoInterface>(false, []);
  public selectionNivelEducativo = new SelectionModel<RangoEvaluativoInterface>(false, []);
  public responseServicioRangos: Servicio;
  public responseServicioColores: Servicio;
  public responseServicioEscala: Servicio;
  public isUpdate = false;
  public rangosList: any;
  public nivelesList: any;
  public coloresList: any;
  public displayedColumnsNivelEducativo: string[] = ["NivelEducativo"];
  public displayedColumns: string[] = [
    "nombreRangoEvaluativo",
    "abreviatura",
    "valorMinimo",
    "valorMaximo",
    "idColor",
    "aprobado",
  ];
  public escala: EscalaValorativaInterface;
  public responseEscalas: EscalaValorativaInterface[] = [];
  public idNivelEducativoSeleccionado = 0;
  public idRangoSeleccionado = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  //#endregion

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private rangoService: RangoEvaluativoService,
    private servicioComunicacion: ComAsistenteEducativoService,
    private cd: ChangeDetectorRef,
    private nivelEducativoService: NivelEducativoService,
    private escalaService: EscalaValorativaService
  ) {}

  ngOnInit(): void {
    this.servicioComunicacion.enviarAsistenteObservable.subscribe(
      (asistente) => {
        this.asistente = asistente;
        if (this.asistente.idCampus > 0 && this.asistente.idCicloEscolar > 0) {
          this.getNivelesEducativos();
          this.getRangosEvaluativos();
        }
      }
    );
    this.getColores();
  }

  //#region Consultas
  getRangosEvaluativos() {
    if (
      this.asistente.idCicloEscolar > 0 &&
      this.asistente.idCampus > 0 &&
      this.idNivelEducativoSeleccionado > 0
    ) {
      const request = new RequestRangoEvaluativo();
      request.IdCampus = this.asistente.idCampus;
      request.IdCicloEscolar = this.asistente.idCicloEscolar;
      request.IdNivelAcademico = this.idNivelEducativoSeleccionado;

      return this.rangoService
        .getRangosEvaluativos(request)
        .subscribe((data: {}) => {
          this.rangosList = data;
          this.responseServicioRangos = new Servicio();
          this.responseServicioRangos.data = this.rangosList.data;
          this.responseServicioRangos.errorId = this.rangosList.errorId;
          this.responseServicioRangos.errorMessage = this.rangosList.errorMessage;
          this.responseServicioRangos.token = this.rangosList.token;
          this.dataTable = this.rangosList.data;
          this.dataTableToPost = this.rangosList.data;
          this.dataSource = new MatTableDataSource(this.dataTable);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
    } else {
      this.dataTable = [];
      this.dataTableToPost = [];
      this.dataSource = new MatTableDataSource(this.dataTable);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  getNivelesEducativos() {
    const request = new RequestEscalaValorativa();
    request.IdCampus = this.asistente.idCampus;
    request.IdCicloEscolar = this.asistente.idCicloEscolar;
    return this.escalaService.getEscalaEvaluativa(request).subscribe((data: {}) => {
      this.nivelesList = data;
      this.responseServicioEscala = new Servicio();
      this.responseServicioEscala.data = this.nivelesList.data;
      this.responseServicioEscala.errorId = this.nivelesList.errorId;
      this.responseServicioEscala.errorMessage = this.nivelesList.errorMessage;
      this.responseServicioEscala.token = this.nivelesList.token;
      this.setNivelesEducativos(data);
    });

  }

  getColores() {
    return this.rangoService.getColores().subscribe((data: {}) => {
      this.coloresList = data;
      this.responseServicioColores = new Servicio();
      this.responseServicioColores.data = this.coloresList.data;
      this.responseServicioColores.errorId = this.coloresList.errorId;
      this.responseServicioColores.errorMessage = this.coloresList.errorMessage;
      this.responseServicioColores.token = this.coloresList.token;
      this.dataTableColors = this.coloresList.data;
      this.listaColores = this.coloresList.data;
    });
  }

  //#endregion

  //#region Mantenimiento
  postRangoEvaluativos(request: RequestMmtoRangoEvaluativo) {
    return this.rangoService.postRangoEvaluativo(request).subscribe(res => {
      if (res.errorId === 0){
        this.openSnackBar('Operación exitosa', 'Ok');
        this.getRangosEvaluativos();
      }else{
        this.openSnackBar('Ocurrió un problema al guardar el rango', 'Ignorar');
      }
    });
  }
  //#endregion

  //#region Notificaciones
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  //#endregion

  //#region Comunicacion
  enviarAsistente(asistente: AsistenteAcademicoComponents) {
    this.servicioComunicacion.enviarAsistente(asistente);
  }
  //#endregion

  //#region Funciones

  getColor(id: number) {
    const index = this.listaColores.findIndex((color) => color.idColor === id);
    return index >= 0 ? this.listaColores[index].hexadecimal : "#000000";
  }

  new() {
    this.openDialogNuevo();
  }

  update(id: number) {
    const index = this.dataTableToPost.findIndex(
      (rango) => rango.idRangoEvaluativo === id
    );
    if (index >= 0) {
      let rango = new Rango();
      rango = this.dataTableToPost[index];
      this.openDialogModificar(rango, index);
    }
  }

  remove(id: number) {
    const index = this.dataTableToPost.findIndex(
      (rango) => rango.idRangoEvaluativo === id
    );
    if (index >= 0) {
      let rango = new Rango();
      rango = this.dataTableToPost[index];
      this.openDialogRemover(rango, index);
    }
  }


  setNivelesEducativos(nivelesEducativosBody) {
    this.ELEMENT_DATA_NIVELEDUCATIVO = [];
    this.dataSourceNivelEducativo = new MatTableDataSource(
      this.ELEMENT_DATA_NIVELEDUCATIVO
    );
    for (let currentNivelEducativo in nivelesEducativosBody.data) {
      if (nivelesEducativosBody.data[currentNivelEducativo].idTipoEscalaValorativa > 0) {
        let nivelEducativoElement: EscalaValorativaInterface = {
          idCampus: nivelesEducativosBody.data[currentNivelEducativo].idCampus,
          idCicloEscolar:
            nivelesEducativosBody.data[currentNivelEducativo].idCicloEscolar,
          idNivelAcademico:
            nivelesEducativosBody.data[currentNivelEducativo].idNivelAcademico,
          nombreNivelAcademico:
            nivelesEducativosBody.data[currentNivelEducativo].nombreNivelAcademico,
          idTipoEscalaValorativa:
            nivelesEducativosBody.data[currentNivelEducativo].idTipoEscalaValorativa,
          valorMinimo:
            nivelesEducativosBody.data[currentNivelEducativo].valorMinimo,
          valorMaximo:
            nivelesEducativosBody.data[currentNivelEducativo].valorMaximo
        };
        this.ELEMENT_DATA_NIVELEDUCATIVO.push(nivelEducativoElement);
      }
    }
    this.dataSourceNivelEducativo = new MatTableDataSource(
      this.ELEMENT_DATA_NIVELEDUCATIVO
    );
  }

  seleccionarNivel(id: number) {
    const index = this.nivelesList.data.findIndex((escala) => escala.idNivelAcademico === id);
    if (id === this.idNivelEducativoSeleccionado) {
      this.idNivelEducativoSeleccionado = 0;
      this.idRangoSeleccionado = 0;
      this.dataSource = new MatTableDataSource();
    } else {
      this.idNivelEducativoSeleccionado = id;
      this.getRangosEvaluativos();
    }
    this.escala = this.nivelesList.data[index];
    this.isUpdate = false;
  }

  seleccionarRango(id: number) {
    if (id === this.idRangoSeleccionado) {
      this.idRangoSeleccionado = 0;
      this.isUpdate = false;
    } else {
      this.idRangoSeleccionado = id;
      this.isUpdate = true;
    }
  }
  //#endregion

  //#region Dialogos
  openDialogNuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: "Nuevo Rango Evaluativo",
      escala: this.escala,
      rangoEvaluativo: new Rango(),
      accion: "create",
      listaColores: this.listaColores,
    };

    const dialogRef = this.dialog.open(
      RangoEvaluativoFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data.isSubmit) {
        if (data.typeAction === "create") {
          const rango = new Rango();
          rango.idCampus = this.asistente.idCampus;
          rango.idCicloEscolar = this.asistente.idCicloEscolar;
          rango.idNivelAcademico = this.idNivelEducativoSeleccionado;
          rango.abreviatura = data.data.abreviatura;
          rango.aprobado = data.data.aprobado;
          rango.idColor = data.data.idColor;
          rango.nombreRangoEvaluativo = data.data.nombreRangoEvaluativo;
          rango.valorMinimo = data.data.valorMinimo;
          rango.valorMaximo = data.data.valorMaximo;
          rango.activo = true;
          this.dataTableToPost.push(rango);
          this.dataSource = new MatTableDataSource(this.dataTableToPost);
          const request = new RequestMmtoRangoEvaluativo();
          request.idCampus = this.asistente.idCampus;
          request.idCicloEscolar = this.asistente.idCicloEscolar;
          request.idNivelAcademico = this.idNivelEducativoSeleccionado;
          request.data = this.dataTableToPost;
          this.postRangoEvaluativos(request);
        }
      }
    });
  }

  openDialogModificar(rango: Rango, index: number) {
    const dialogConfig = new MatDialogConfig();
    console.log(rango);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: "Modificar Rango Evaluativo",
      escala: this.escala,
      rangoEvaluativo: rango,
      accion: "update",
      listaColores: this.listaColores,
    };

    const dialogRef = this.dialog.open(
      RangoEvaluativoFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data.isSubmit) {
        if (data.typeAction === "update") {
          console.log(this.dataTableToPost[index]);
          this.dataTableToPost[index].abreviatura = data.data.abreviatura;
          this.dataTableToPost[index].aprobado = data.data.aprobado;
          this.dataTableToPost[index].idColor = data.data.idColor;
          this.dataTableToPost[index].nombreRangoEvaluativo = data.data.nombreRangoEvaluativo;
          this.dataTableToPost[index].valorMinimo = data.data.valorMinimo;
          this.dataTableToPost[index].valorMaximo = data.data.valorMaximo;
          this.dataSource = new MatTableDataSource(this.dataTableToPost);
          const request = new RequestMmtoRangoEvaluativo();
          request.idCampus = this.asistente.idCampus;
          request.idCicloEscolar = this.asistente.idCicloEscolar;
          request.idNivelAcademico = this.idNivelEducativoSeleccionado;
          request.data = this.dataTableToPost;
          this.postRangoEvaluativos(request);
          this.idRangoSeleccionado = 0;
          this.isUpdate = false;
        }
      }
    });
  }

  openDialogRemover(rango: Rango, index: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: "Remover Rango Evaluativo",
      rangoEvaluativo: rango,
      accion: "remove",
      listaColores: this.listaColores,
    };

    const dialogRef = this.dialog.open(
      RangoEvaluativoRemoveComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data.isSubmit) {
        if (data.typeAction === "remove") {
          this.dataTableToPost.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataTableToPost);
          const request = new RequestMmtoRangoEvaluativo();
          request.idCampus = this.asistente.idCampus;
          request.idCicloEscolar = this.asistente.idCicloEscolar;
          request.idNivelAcademico = this.idNivelEducativoSeleccionado;
          request.data = this.dataTableToPost;
          this.postRangoEvaluativos(request);
        }
      }
    });
  }
  //#endregion
}
