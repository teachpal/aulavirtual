import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NivelEducativoElement } from 'src/app/interfaces/nivel-educativo-element';
import { AsistenteAcademicoComponents } from 'src/app/Models/asistente-academico-components';
import { ComAsistenteEducativoService } from 'src/app/services/com-asistente-educativo.service';
import { NivelEducativoService } from 'src/app/services/nivel-educativo.service';
import { GradoElement } from 'src/app/interfaces/grado-element';
import { GradoService } from 'src/app/services/grado-service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResponseService } from 'src/app/Models/response/response-service';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.sass']
})
export class GradosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatListModule) list: MatListModule;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  selection = new SelectionModel<GradoElement>(false, []);
  selectionNivelEducativo = new SelectionModel<NivelEducativoElement>(false, []);

  displayedColumnsNivelEducativo: string[] = ['NivelEducativo'];
  displayedColumnsGrado: string[] = ['seleccionar', 'nombreGrado', 'orden']
  //Notificaciones
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  dataSourceNivelEducativo = new MatTableDataSource<NivelEducativoElement>();
  ELEMENT_DATA_NIVELEDUCATIVO: NivelEducativoElement[] = [];
  dataSourceGrado = new MatTableDataSource<GradoElement>();
  ELEMENT_DATA_GRADO: GradoElement[] = [];


  asistente = new AsistenteAcademicoComponents();

  idNivelAcademico = 0;
  toggleForm = false;
  resetGrid = false;

  constructor(private _nivelEducativoService: NivelEducativoService,
    private _gradoService: GradoService,
    private _snackBar: MatSnackBar,
    private _asistenteService: ComAsistenteEducativoService) {
  }


  ngOnInit(): void {
    this._asistenteService.enviarAsistenteObservable.subscribe(asistente => {
      this.asistente = asistente;
      this.resetGridGrados();
      let queryRoute = `?IdCampus=${this.asistente.idCampus}&IdCicloEscolar=${this.asistente.idCicloEscolar}`;
      this._nivelEducativoService.getNivelEducativoByExpression(queryRoute)
        .subscribe(data => {
          console.log(data);
          this.setNivelesEducativos(data);
        });
    })
  }

  resetGridGrados() {
    if (this.asistente.resetGrid) {
      this.toggleForm = false;
      this.ELEMENT_DATA_GRADO = [];
      this.dataSourceGrado = new MatTableDataSource(this.ELEMENT_DATA_GRADO);
    }

  }

  enviarAsistente(asistente: AsistenteAcademicoComponents) {
    this._asistenteService.enviarAsistente(asistente);
  }

  getGrados(idNivelAcademico) {
    this.idNivelAcademico = idNivelAcademico;
    let queryRoute = `?IdCampus=${this.asistente.idCampus}&IdCicloEscolar=${this.asistente.idCicloEscolar}&IdNivelAcademico=${idNivelAcademico}`;
    this._gradoService.getGradossByExpression(queryRoute)
      .subscribe(data => {
        console.log(data);
        this.setGrados(data);
      });
  }

  setGrados(data) {
    this.toggleForm = false;
    this.toggleForm = true;
    this.ELEMENT_DATA_GRADO = [];
    this.dataSourceGrado = new MatTableDataSource(this.ELEMENT_DATA_GRADO);
    for (let currentGrado in data.data) {
      let grado: GradoElement = {
        activo: data.data[currentGrado].activo,
        idCampus: this.asistente.idCampus,
        idCicloEscolar: this.asistente.idCicloEscolar,
        idGrado: data.data[currentGrado].idGrado,
        idNivelAcademico: this.idNivelAcademico,
        nombreGrado: data.data[currentGrado].nombreGrado,
        seleccionar: data.data[currentGrado].seleccionar,
        orden: (parseInt(currentGrado) + 1)
      }
      this.ELEMENT_DATA_GRADO.push(grado);
    }
    this.dataSourceGrado = new MatTableDataSource(this.ELEMENT_DATA_GRADO);
  }

  setNivelesEducativos(nivelesEducativosBody) {
    this.ELEMENT_DATA_NIVELEDUCATIVO = [];
    this.dataSourceNivelEducativo = new MatTableDataSource(this.ELEMENT_DATA_NIVELEDUCATIVO);
    for (let currentNivelEducativo in nivelesEducativosBody.data) {
      if (nivelesEducativosBody.data[currentNivelEducativo].seleccionar == 1) {
        let nivelEducativoElement: NivelEducativoElement = {
          abreviatura: nivelesEducativosBody.data[currentNivelEducativo].abreviatura,
          activo: nivelesEducativosBody.data[currentNivelEducativo].activo,
          idCampus: nivelesEducativosBody.data[currentNivelEducativo].idCampus,
          idCicloEscolar: nivelesEducativosBody.data[currentNivelEducativo].idCicloEscolar,
          idNivelAcademico: nivelesEducativosBody.data[currentNivelEducativo].idNivelAcademico,
          nombreNivelAcademico: nivelesEducativosBody.data[currentNivelEducativo].nombreNivelAcademico,
          seleccionar: nivelesEducativosBody.data[currentNivelEducativo].nombreNivelAcademico
        }
        this.ELEMENT_DATA_NIVELEDUCATIVO.push(nivelEducativoElement);
      }
    }
    console.log('All niveles educativos: ' + this.ELEMENT_DATA_NIVELEDUCATIVO);
    this.dataSourceNivelEducativo = new MatTableDataSource(this.ELEMENT_DATA_NIVELEDUCATIVO);
  }

  guardarConfiguracionGrados() {
    let gradosSeleccionados = this.ELEMENT_DATA_GRADO.filter(x => x.seleccionar == true);
    let elements = []
    for (let gradoSeleccionado in gradosSeleccionados) {
      elements.push({
        idGrado: gradosSeleccionados[gradoSeleccionado].idGrado,
        idCampus: this.asistente.idCampus,
        idCicloEscolar: this.asistente.idCicloEscolar,
        idNivelAcademico: this.idNivelAcademico,
        nombreGrado: gradosSeleccionados[gradoSeleccionado].nombreGrado,
        seleccionar: gradosSeleccionados[gradoSeleccionado].seleccionar == true ? 1 : 0,
        activo: true
      })
    }
    let postGradosRequest = {
      pToken: "string",
      idCampus: this.asistente.idCampus,
      idCicloEscolar: this.asistente.idCicloEscolar,
      idNivelAcademico: this.idNivelAcademico,
      data: elements
    };
    console.log('Final JSON: ' + JSON.stringify(postGradosRequest));
    this._gradoService.post(JSON.stringify(postGradosRequest)).subscribe({
      next: (data: ResponseService) => {
        console.log(data);
        if (data.errorId == 0) {
          this.openSnackBar('Se guardo grados configuración con éxito', 'Ignorar');
          this.asistente.resetGrid = false;
          this.enviarAsistente(this.asistente);
        }
        else{
          this.openSnackBar('No es posible guardar los datos', 'OK');
        }
      },
      error: error => {
        this.openSnackBar('No es posible guardar los datos', 'OK');
        console.log(error);
      }
    });
  }

  // notificaciones
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
