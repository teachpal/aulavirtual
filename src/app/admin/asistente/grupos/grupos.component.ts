import { ResponseService } from './../../../Models/response/response-service';
import { NivelEducativoElement } from 'src/app/interfaces/nivel-educativo-element';
import { GrupoInterface } from './../../../interfaces/grupo-interface';
import { RequestGrupoNivelAcademico } from './../../../Models/request/request-grupo-nivel-academico';
import { RequestGrupo } from './../../../Models/request/request-grupo';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { GrupoService } from './../../../services/grupo.service';
import { ComAsistenteEducativoService } from './../../../services/com-asistente-educativo.service';
import { NivelEducativoService } from './../../../services/nivel-educativo.service';
import { ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Grupo, RequestMmtoGrupoNivelAcademico } from 'src/app/Models/request/request-mmto-grupo-nivel-academico';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.sass']
})
export class GruposComponent implements OnInit, OnChanges {

  public horizontalPosition: MatSnackBarHorizontalPosition = "center";
  public verticalPosition: MatSnackBarVerticalPosition = "top";
  public asistente = new AsistenteAcademicoComponents();
  public genericResponse: any;
  public genericResponseGruposNivelEducativo: any;
  public genericResponseGrupos: any;
  public responseGrupos = new ResponseService();
  public responseGruposNiveles = new ResponseService();
  public responseNiveles = new ResponseService();
  public dataTableGrupos: GrupoInterface[] = [];
  public dataTableGruposToPost: GrupoInterface[] = [];
  public dataTableNiveles: NivelEducativoElement[] = [];
  public dataSourceGrupos = new MatTableDataSource<GrupoInterface>();
  public dataSourceNiveles = new MatTableDataSource<NivelEducativoElement>();
  public selectionNivelEducativo = new SelectionModel<NivelEducativoElement>(false, []);
  public selectionGrupo = new SelectionModel<GrupoInterface>(false, []);
  public idNivelSeleccionado = 0;
  public displayedColumnsNivelEducativo: string[] = ["NivelEducativo"];
  public displayedColumnsGrupos: string[] = [
    "Grado",
    "Grupo A",
    "Grupo B",
    "Grupo C"
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;


  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private grupoService: GrupoService,
    private servicioComunicacion: ComAsistenteEducativoService,
    private cd: ChangeDetectorRef,
    private nivelEducativoService: NivelEducativoService
  ) {}

  ngOnInit(): void {
    this.servicioComunicacion.enviarAsistenteObservable.subscribe(
      (asistente) => {
        this.asistente = asistente;
        this.getNivelesEducativos();
        this.getGruposNivelesAcademicos();
        this.idNivelSeleccionado = 0;
      }
    );
    this.getGrupos();
  }

  ngOnChanges(): void{
  }

  //#region Consultas
    getNivelesEducativos(){
      if ( this.asistente.idCicloEscolar > 0 && this.asistente.idCampus > 0){
        let queryRoute = `?IdCampus=${this.asistente.idCampus}&IdCicloEscolar=${this.asistente.idCicloEscolar}`;
        return this.nivelEducativoService.getNivelEducativoByExpression(queryRoute).subscribe((data: {}) => {
          this.genericResponse = data;
          let removeList = [];
          this.responseNiveles = new ResponseService();
          this.responseNiveles.data = this.genericResponse.data;
          this.responseNiveles.data.forEach((nivel, index) => {
            if(nivel.seleccionar === 0){
              removeList.push(index);
            }
          });

          if(removeList.length > 0){
            removeList = removeList.reverse();
            removeList.forEach(item => {
              this.removeItem(item)
            });  
          }
          this.responseNiveles.errorId = this.genericResponse.errorId;
          this.responseNiveles.errorMessage = this.genericResponse.errorMessage;
          this.responseNiveles.token = this.genericResponse.token;
          this.dataTableNiveles = this.responseNiveles.data;
          this.dataSourceNiveles = new MatTableDataSource(this.dataTableNiveles);
          this.dataSourceNiveles.sort = this.sort;
          this.dataSourceNiveles.paginator = this.paginator;
        });
      }
    }

    getGruposNivelesAcademicos(){
      if(this.asistente.idCampus > 0 && this.asistente.idCicloEscolar > 0 && this.idNivelSeleccionado > 0){
        const request = new RequestGrupoNivelAcademico();
        request.idCampus = this.asistente.idCampus;
        request.idCicloEscolar = this.asistente.idCicloEscolar;
        request.idNivelAcademico = this.idNivelSeleccionado;
        return this.grupoService.getGruposNivelAcademico(request).subscribe((data: {}) => {
          this.genericResponseGruposNivelEducativo = data;
          this.responseGruposNiveles.errorId = this.genericResponseGruposNivelEducativo.errorId;
          this.responseGruposNiveles.errorMessage = this.genericResponseGruposNivelEducativo.errorMessage;
          this.responseGruposNiveles.token = this.genericResponseGruposNivelEducativo.token;
          this.dataTableGrupos = this.genericResponseGruposNivelEducativo.data;
          if (this.dataTableGrupos.length > 0){
            this.dataSourceGrupos = new MatTableDataSource(this.dataTableGrupos);
          }else{
            this.dataTableGrupos = [];
            this.dataSourceGrupos = new MatTableDataSource();
          }
        });
      }else{
        this.dataTableGrupos = [];
        this.dataSourceGrupos = new MatTableDataSource();
      }
    }

    getGrupos(){
      const request = new RequestGrupo();
      return this.grupoService.getGrupos(request).subscribe((data: {}) => {
        this.genericResponseGrupos = data;
        this.responseGrupos.errorId = this.genericResponseGrupos.errorId;
        this.responseGrupos.errorMessage = this.genericResponseGrupos.errorMessage;
        this.responseGrupos.token = this.genericResponseGrupos.token;
        this.responseGrupos.data = this.genericResponseGrupos.data;
      });
    }
  //#endregion

  //#region  Mantenimiento
    postGrupos(arrayGrupos: Array<Grupo>){
      console.log('Guardar grupos');
      const request = new RequestMmtoGrupoNivelAcademico();
      request.pToken = 'mytoken'
      request.data = arrayGrupos;
      request.idCampus = this.asistente.idCampus;
      request.idCicloEscolar = this.asistente.idCicloEscolar;
      request.idNivelAcademico = this.idNivelSeleccionado;
      return this.grupoService.postGruposNivelAcademico(request).subscribe(res => {
        if (res.errorId === 0){
          this.openSnackBar('Operación exitosa', 'Ok');
        }else{
          this.openSnackBar('Ocurrió un problema al asignar grupos', 'Ignorar');
        }
        this.getGrupos();
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

  //#region Funciones

  save(){
    var newGroupList = Array<Grupo>();
    this.dataTableGrupos.forEach((grado, indexGrado) => {
      const nameProps = Object.getOwnPropertyNames(grado);
      var newGroup = new Grupo();
      nameProps.forEach((prop, indexProp) => {
        switch (prop) {
          case 'a':
            if(grado.a){
              newGroup = new Grupo();
              newGroup.idCampus = this.asistente.idCampus
              newGroup.idCicloEscolar = this.asistente.idCicloEscolar;
              newGroup.idNivelAcademico = grado.idNIvelAcademico;
              newGroup.idGrado = grado.idGrado;
              newGroup.activo = true;
              newGroup.idGrupo = this.findGroup('a');
              newGroupList.push(newGroup);
            }
          break;
          case 'b':
            if(grado.b){
              newGroup = new Grupo();
              newGroup.idCampus = this.asistente.idCampus
              newGroup.idCicloEscolar = this.asistente.idCicloEscolar;
              newGroup.idNivelAcademico = grado.idNIvelAcademico;
              newGroup.idGrado = grado.idGrado;
              newGroup.activo = true;
              newGroup.idGrupo = this.findGroup('b');
              newGroupList.push(newGroup);
            }
          break;
          case 'c':
            if(grado.c){
              newGroup = new Grupo();
              newGroup.idCampus = this.asistente.idCampus
              newGroup.idCicloEscolar = this.asistente.idCicloEscolar;
              newGroup.idNivelAcademico = grado.idNIvelAcademico;
              newGroup.idGrado = grado.idGrado;
              newGroup.activo = true;
              newGroup.idGrupo = this.findGroup('c');
              newGroupList.push(newGroup);
            }
            break;
          default:
            break;
        }
      });
    });
    

    if(newGroupList.length > 0){
      this.postGrupos(newGroupList);
    }else{
      if(this.dataTableGrupos.length > 0){
        this.postGrupos(newGroupList);
      }else{
        this.openSnackBar('No hay datos para guardar','Ok');
      }
    }
  }

  findGroup(nombreGrupo: string){
    let idGrupo = 0;
    let index = this.responseGrupos.data.findIndex(grupo => grupo.nombreGrupo === nombreGrupo.toUpperCase())
    if(index >= 0){
      idGrupo = this.responseGrupos.data[index].idGrupo;
    }
    return idGrupo;
  }

  setIdNivelEducativo(id: number){
    if(this.idNivelSeleccionado === id){
      this.idNivelSeleccionado = 0;
    }else{
      this.idNivelSeleccionado = id;
    }
    this.getGruposNivelesAcademicos();
  }

  removeItem(index: number){
    this.responseNiveles.data.splice(index, 1);
  }

  changeA(valueChange: boolean, idNivel: number, idGrado: number){
    if(valueChange === false){
     const index =  this.dataTableGrupos.findIndex(grupo => grupo.idNIvelAcademico === idNivel && grupo.idGrado === idGrado);
     this.dataTableGrupos[index].b = 0;
     this.dataTableGrupos[index].c = 0;
    }
    this.dataSourceGrupos = new MatTableDataSource(this.dataTableGrupos);
  }

  changeB(valueChange: boolean, idNivel: number, idGrado: number){
    if(valueChange === false){
     const index =  this.dataTableGrupos.findIndex(grupo => grupo.idNIvelAcademico === idNivel && grupo.idGrado === idGrado);
     this.dataTableGrupos[index].c = 0;
    }
    this.dataSourceGrupos = new MatTableDataSource(this.dataTableGrupos);
  }
  //#endregion


}
