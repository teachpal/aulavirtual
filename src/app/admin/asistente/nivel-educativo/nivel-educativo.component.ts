import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Servicio } from 'src/app/Models/servicio';
import { NivelEducativoService } from 'src/app/services/nivel-educativo.service';

import { NivelEducativoElement } from 'src/app/interfaces/nivel-educativo-element';
import { NivelEducativoModel } from 'src/app/Models/nivel-educativo-model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/utilerias/format-datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import { ComAsistenteEducativoService } from 'src/app/services/com-asistente-educativo.service';
import { ResponseService } from 'src/app/Models/response/response-service';

@Component({
  selector: 'app-nivel-educativo',
  templateUrl: './nivel-educativo.component.html',
  styleUrls: ['./nivel-educativo.component.sass']
})
export class NivelEducativoComponent implements OnInit, OnChanges {
  ciclo: Servicio;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['seleccionar', 'nivelEducativo', 'abreviatura'];
  dataSource = new MatTableDataSource<NivelEducativoElement>(); //good
  nivelesEducativos: Servicio;
  nivelEducativoREST: any;
  ELEMENT_DATA: NivelEducativoElement[] = [];
  selection = new SelectionModel<NivelEducativoElement>(false, []);
  idCicloEscolar;
  idCampus;

  //Notificaciones
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  asistente = new AsistenteAcademicoComponents();

  constructor(private _nivelEducativoService: NivelEducativoService, private _snackBar: MatSnackBar,
    private _asistenteService: ComAsistenteEducativoService,) {
    this.nivelesEducativos = new Servicio;
    this.idCampus = this.asistente.idCampus;
    this.idCicloEscolar = this.asistente.idCicloEscolar;
    console.log(this.idCampus + ' ' + this.idCicloEscolar);
  }

  ngOnInit(): void {
    this._asistenteService.enviarAsistenteObservable.subscribe(asistente => {
      this.ELEMENT_DATA = [];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.asistente = asistente;
      let queryRoute = `?IdCampus=${asistente.idCampus}&IdCicloEscolar=${asistente.idCicloEscolar}`;
      this._nivelEducativoService.getNivelEducativoByExpression(queryRoute)
        .subscribe(data => {
          console.log(data);
          this.setNivelesEducativos(data);
        });
    });
  }

  enviarAsistente(asistente: AsistenteAcademicoComponents) {
    this._asistenteService.enviarAsistente(asistente);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  setNivelesEducativos(nivelesEducativosBody) {
    this.nivelEducativoREST = nivelesEducativosBody;
    this.nivelesEducativos.data = this.nivelEducativoREST.data;
    this.nivelesEducativos.errorId = this.nivelEducativoREST.errorId;
    this.nivelesEducativos.errorMessage = this.nivelEducativoREST.errorMessage;
    this.nivelesEducativos.token = this.nivelEducativoREST.token;

    for (let currentNivelEducativo in this.nivelesEducativos.data) {
      let nivelEducativo = new NivelEducativoModel();
      let nivelEducativoElement: NivelEducativoElement;

      nivelEducativo.abreviatura = this.nivelesEducativos.data[currentNivelEducativo].abreviatura;
      nivelEducativo.activo = this.nivelesEducativos.data[currentNivelEducativo].activo;
      nivelEducativo.idCampus = this.asistente.idCampus;
      nivelEducativo.idCicloEscolar = this.asistente.idCicloEscolar;
      nivelEducativo.idNivelAcademico = this.nivelesEducativos.data[currentNivelEducativo].idNivelAcademico;
      nivelEducativo.nombreNivelAcademico = this.nivelesEducativos.data[currentNivelEducativo].nombreNivelAcademico;
      nivelEducativo.seleccionar = this.nivelesEducativos.data[currentNivelEducativo].seleccionar;

      nivelEducativoElement = <NivelEducativoElement>nivelEducativo;
      this.ELEMENT_DATA.push(nivelEducativoElement);

      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  guardarConfiguracionNivelEducativo() {
    let nivelesSeleccionados = this.ELEMENT_DATA.filter(x => x.seleccionar);
    let elements = []
    for (let nivelSeleccionado in nivelesSeleccionados) {
      elements.push({
        abreviatura: nivelesSeleccionados[nivelSeleccionado].abreviatura,
        idCampus: this.asistente.idCampus,
        idCicloEscolar: this.asistente.idCicloEscolar,
        idNivelAcademico: nivelesSeleccionados[nivelSeleccionado].idNivelAcademico,
        nombreNivelAcademico: nivelesSeleccionados[nivelSeleccionado].nombreNivelAcademico,
        seleccionar: nivelesSeleccionados[nivelSeleccionado].seleccionar == true ? 1 : 0,
      })
    }
    let postNivelesEducativosRequest = {
      idCicloEscolar: this.asistente.idCicloEscolar,
      idCampus: this.asistente.idCampus,
      data: elements
    };
    console.log('Final JSON: ' + JSON.stringify(elements));
    this._nivelEducativoService.post(JSON.stringify(postNivelesEducativosRequest)).subscribe({
      next: (data: ResponseService) => {
        console.log(data);
        if (data.errorId == 0) {
          this.openSnackBar('Se guardo nivel escolar con exito', 'Ignorar');
          this.enviarAsistente(this.asistente);
        }
        else {
          this.openSnackBar(`Los niveles educativos que quieres eliminar tienen datos configurados. \n
                           Elimina esta configuración para poder guardar tus cambios`, '');
        }
      },
      error: error => {
        this.openSnackBar(`Los niveles educativos que quieres eliminar tienen datos configurados. \n
                           Elimina esta configuración para poder guardar tus cambios`, '');
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
