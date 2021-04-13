import { FormGroup } from '@angular/forms';
import { SelectTipoEscala } from './../../../Models/request/select-tipo-escala';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EscalaValorativaInterface } from './../../../interfaces/escala-valorativa';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseService } from './../../../Models/response/response-service';
import { ComAsistenteEducativoService } from './../../../services/com-asistente-educativo.service';
import { RequestEscalaValorativa } from './../../../Models/request/request-escala-valorativa';
import { EscalaValorativaService } from './../../../services/escala-valorativa.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { RequestMmtoEscalaValorativa } from './../../../Models/request/request-mmto-escala-valorativa';
import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Servicio } from 'src/app/Models/servicio';
@Component({
  selector: 'app-escala-valorativa',
  templateUrl: './escala-valorativa.component.html',
  styleUrls: ['./escala-valorativa.component.sass']
})
export class EscalaValorativaComponent implements OnInit, OnChanges {

  //#region  Variables
  public escalaList: any;
  public tipoEscalaList: any;
  public asistente = new AsistenteAcademicoComponents();
  public response = new ResponseService();
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public dataSource = new MatTableDataSource<EscalaValorativaInterface>();
  public dataTable: EscalaValorativaInterface[] = [];
  public dataTableToPost: EscalaValorativaInterface[] = [];
  public servicioEscalaValorativa: Servicio;
  public servicioTipoEscalaValorativa: Servicio;
  public selection = new SelectionModel<EscalaValorativaInterface>(false, []);
  public IdRegistroSeleccionado = 0;
  public listaTipoDeEscala = Array<SelectTipoEscala>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  form: FormGroup;
  public displayedColumns: string[] = [
    "nombreNivelAcademico",
    "idTipoEscalaValorativa",
    "valorMinimo",
    "valorMaximo",
  ];
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

  //#endregion
//
  constructor(private snackBar: MatSnackBar, private escalaService: EscalaValorativaService,
              private servicioComunicacion: ComAsistenteEducativoService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.servicioComunicacion.enviarAsistenteObservable.subscribe(asistente => {
      this.asistente = asistente;
      this.getEscalasValorativas();
    });
    this.getTiposEscalaValoratiba('mytoken');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getEscalasValorativas();
  }

  //#region Consultas

  getEscalasValorativas(){
    if (this.asistente.idCicloEscolar > 0 && this.asistente.idCampus > 0){
      const request = new RequestEscalaValorativa();
      request.IdCampus = this.asistente.idCampus;
      request.IdCicloEscolar = this.asistente.idCicloEscolar;
      request.IdNivelAcademico = this.asistente.idNivelEducativo;

      return this.escalaService.getEscalaEvaluativa(request).subscribe((data: {}) => {
        this.escalaList = data;
        this.servicioEscalaValorativa = new Servicio();
        this.servicioEscalaValorativa.data = this.escalaList.data;
        this.servicioEscalaValorativa.errorId = this.escalaList.errorId;
        this.servicioEscalaValorativa.errorMessage = this.escalaList.errorMessage;
        this.servicioEscalaValorativa.token = this.escalaList.token;
        this.dataTable = this.escalaList.data;
        this.dataTableToPost = this.escalaList.data;
        this.dataSource = new MatTableDataSource(this.dataTable);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  getTiposEscalaValoratiba(token: string){

    return this.escalaService.getTiposEscalaValoratiba(token).subscribe((data: {}) => {
      this.tipoEscalaList = data;
      this.servicioTipoEscalaValorativa = new Servicio();
      this.servicioTipoEscalaValorativa.data = this.tipoEscalaList.data;
      this.servicioTipoEscalaValorativa.errorId = this.tipoEscalaList.errorId;
      this.servicioTipoEscalaValorativa.errorMessage = this.tipoEscalaList.errorMessage;
      this.servicioTipoEscalaValorativa.token = this.tipoEscalaList.token;
      this.listaTipoDeEscala = this.servicioTipoEscalaValorativa.data;
      let sinAsignar = new SelectTipoEscala();
      sinAsignar.idTipoEscalaValorativa = 0;
      sinAsignar.descripcion = 'SIN ASIGNAR';
      sinAsignar.activo = true;
      this.listaTipoDeEscala.push(sinAsignar);
    });
  }

  //#endregion

  //#region Mantenimiento
  postEscalaValorativa(request: RequestMmtoEscalaValorativa){
    return this.escalaService.postEscalaEvaluativa(request).subscribe(res => {
      if (res.errorId === 0){
        this.openSnackBar('Se guardo la escala valorativa con éxito', 'Ignorar');
        this.getEscalasValorativas();
        this.enviarAsistente(this.asistente);
      }else{
        this.openSnackBar('Ocurrió un problema al guardar la escala valorativa', 'Ignorar');
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
  save(){
    if (this.validar()){
      let request = new RequestMmtoEscalaValorativa();
      var result = [];
      request.pToken = "token";
      request.idCampus = this.asistente.idCampus;
      request.idCicloEscolar = this.asistente.idCicloEscolar;
      request.idNivelAcademico = this.asistente.idNivelEducativo;
      request.data = this.dataTableToPost;
      request.data.forEach((currentValue, index) => {
        if (currentValue.idTipoEscalaValorativa === 0){
          result.push(index);
        }
      });
      result = result.reverse();
      result.forEach(index => {
        request.data.splice(index, 1);
      });
      this.postEscalaValorativa(request);
    }else{
      this.openSnackBar('No se puede guardar la información. Configuración de Escala valorativa no válida.', 'Ignorar');
    }
  }

  validar(){
    let response = true;
    this.dataTableToPost.forEach((escala , index)=> {
      if (escala.idCampus <= 0){
        response =  false;
      }
      if (escala.idCicloEscolar <= 0){
        response =  false;
      }
      if (escala.idNivelAcademico <= 0){
        response =  false;
      }
      if (escala.valorMinimo.length === 0){
        response = false;
      }
      if (escala.valorMaximo.length === 0){
        response = false;
      }
      switch (escala.idTipoEscalaValorativa) {
        case 1:
          if (Number(escala.valorMinimo) === 0 &&  Number(escala.valorMaximo) === 0){
            response =  false;
          }
          if (Number(escala.valorMinimo) > Number(escala.valorMaximo)){
            response =  false;
          }
          if (Number(escala.valorMinimo) >= 999 && Number(escala.valorMaximo) >= 999){
            response =  false;
          }
          break;
        case 2:
          this.dataTableToPost[index].valorMaximo = this.dataTableToPost[index].valorMaximo.toUpperCase();
          this.dataTableToPost[index].valorMinimo = this.dataTableToPost[index].valorMinimo.toUpperCase();
          let min = 0;
          let max = 0;
          const indexMin = this.letras.findIndex(letra => letra.letra === escala.valorMinimo);
          const indexMax = this.letras.findIndex(letra => letra.letra === escala.valorMaximo);
          if (indexMin >= 0 && indexMax >= 0){
            min = this.letras[indexMin].valor;
            max = this.letras[indexMax].valor;
            if (max < min){
              response =  false;
            }
          }

          break;
      }
    });

    return response;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  ABCDEFOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 64 && charCode < 71 || charCode > 96 && charCode < 103 ) {
      return true;
    }
    return false;
  }

  emitValueIdTipo(value, idNivelAcademico: number){
    const index = this.dataTableToPost.findIndex(escala => escala.idNivelAcademico === idNivelAcademico);
    this.dataTableToPost[index].idTipoEscalaValorativa = value;
    if (value === 2){
      this.dataTableToPost[index].valorMinimo = '';
      this.dataTableToPost[index].valorMaximo = '';
    }else{
      this.dataTableToPost[index].valorMinimo = String(0);
      this.dataTableToPost[index].valorMaximo = String(0);
    }

    this.synTables();
  }

  emitValueMin(value: string, idNivelAcademico: number){
    const index = this.dataTableToPost.findIndex(escala => escala.idNivelAcademico === idNivelAcademico);
    this.dataTableToPost[index].valorMinimo = value;
    this.synTables();
  }

  emitValueMax(value: string, idNivelAcademico: number){
    const index = this.dataTableToPost.findIndex(escala => escala.idNivelAcademico === idNivelAcademico);
    this.dataTableToPost[index].valorMaximo = value;
    this.synTables();
  }

  synTables(){
    this.cd.markForCheck();
    this.dataTable = this.dataTableToPost;
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.cd.markForCheck();
  }

  //#endregion
}
