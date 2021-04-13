import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { PeriodoAcedemicoElement } from 'src/app/interfaces/periodo-academico-element';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatList } from "@angular/material/list";
import { MatListModule } from '@angular/material/list';
import { NivelEducativoElement } from 'src/app/interfaces/nivel-educativo-element';
import { PeriodoElement } from 'src/app/interfaces/periodo-element'
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico-service';
import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import { NivelEducativoService } from 'src/app/services/nivel-educativo.service';
import { MatSelect } from "@angular/material/select";
import { ComAsistenteEducativoService } from 'src/app/services/com-asistente-educativo.service';
import { NgForm } from '@angular/forms'
import { ResponseService } from 'src/app/Models/response/response-service';

@Component({
  selector: 'app-periodo-academico',
  templateUrl: './periodo-academico.component.html',
  styleUrls: ['./periodo-academico.component.sass']
})
export class PeriodoAcademicoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatListModule) list: MatListModule;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("periodoSelect") periodoSelect: MatSelect;
  @ViewChild(MatTable) table: MatTable<any>;
  selectionNivelEducativo = new SelectionModel<NivelEducativoElement>(false, []);

  displayedColumns: string[] = ['periodo', 'porcentaje', 'fechaInicio', 'fechaFinal'];
  displayedColumnsNivelEducativo: string[] = ['NivelEducativo'];
  displayedColumnsNumeroPeriodos: string[] = ['numeroPeriodos'];

  form: FormGroup;
  dataSource = new MatTableDataSource<PeriodoAcedemicoElement>();
  dataSourceNivelEducativo = new MatTableDataSource<NivelEducativoElement>();
  dataSourcePeriodoAcademico = new MatTableDataSource<PeriodoElement>();

  ELEMENT_DATA: PeriodoAcedemicoElement[] = [];
  ELEMENT_DATA_NIVELEDUCATIVO: NivelEducativoElement[] = [];
  ELEMENT_DATA_PERIODOEDUCATIVO: PeriodoElement[] = [];

  nivelEducativo: number = 1;//Primaria
  tipoOpciones: number = 3;
  fechaValida = false;

  idCicloEscolar = 0;
  idCampus = 0;
  idNivelEducativo = 0;
  idNumeroPeriodo = 0;
  numeroPeriodos = 0;
  selected = 0;

  asistente = new AsistenteAcademicoComponents();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  toggleForm = false;
  @ViewChild('myForm') mytemplateForm: NgForm; //

  constructor(private formBuilder: FormBuilder,
    private _periodoAcademicoService: PeriodoAcademicoService,
    private _nivelEducativoService: NivelEducativoService,
    private _asistenteService: ComAsistenteEducativoService,
    private _snackBar: MatSnackBar) {
    this.form = formBuilder.group({});
  }

  resetGridPeriodos() {
    this.toggleForm = false;
    this.ELEMENT_DATA = [];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  setIdNumeroPeriodos(idPeriodo) {

    if (this.idNivelEducativo == 0) {
      this.numeroPeriodos = this.ELEMENT_DATA_PERIODOEDUCATIVO[idPeriodo - 1].numeroPeriodos;
      this.openSnackBar('No se ha seleccionado un nivel educativo', 'Ignorar')
    }
    else {
      this.idNumeroPeriodo = idPeriodo;
      this.deleteForm();
      this.numeroPeriodos = this.ELEMENT_DATA_PERIODOEDUCATIVO[idPeriodo - 1].numeroPeriodos;
      this.setFormElementData(this.numeroPeriodos);
    }
  }

  setFormElementData(numeroPeriodos) {
    if (numeroPeriodos > 0)
      this.deleteForm();
    this.toggleForm = false;
    this.toggleForm = true;
    this.setInfoElementData(numeroPeriodos);
    this.buildForm(numeroPeriodos);
  }

  setInfoElementData(numeroPeriodos) {
    this.ELEMENT_DATA = [];
    for (let element = 0; element < numeroPeriodos; element++) {
      this.ELEMENT_DATA.push(
        {
          periodo: this.ELEMENT_DATA_PERIODOEDUCATIVO[element].numeroPeriodos,
          porcentaje: `${this.nivelEducativo}${element}0`,
          fechaInicio: `${this.nivelEducativo}${element}1`,
          fechaFinal: `${this.nivelEducativo}${element}2`,
          idCampus: this._asistenteService.asistente.idCampus,
          idCicloEscolar: this._asistenteService.asistente.idCicloEscolar,
          idNivelAcademico: this.idNivelEducativo,
          totalPeriodos: this.numeroPeriodos
        }
      );
    }
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    console.log(this.ELEMENT_DATA);
  }

  ngOnInit(): void {
    this._asistenteService.enviarAsistenteObservable.subscribe(asistente => {
      this.resetGridPeriodos();
      this.asistente = asistente;
      this.getNivelesEducativos();
      this._periodoAcademicoService.getllPeriodosAcademicos()
        .subscribe(data => {
          console.log(data);
          this.setPeriodos(data);
        });
    })
    //this.setForm();

  }

  buildForm(numeroPeriodos) {
    for (let i = 0; i < numeroPeriodos; i++) {
      this.form.addControl(
        `${this.nivelEducativo}${i}0`, new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
      );
      this.form.addControl(
        `${this.nivelEducativo}${i}1`, new FormControl('', [Validators.required])
      );
      this.form.addControl(
        `${this.nivelEducativo}${i}2`, new FormControl('', Validators.required)
      );
    };
    console.log('ServForm: ', this.form);
  }

  buildFormDefaultValues(numeroPeriodos, data: any[]) {
    for (let i = 0; i < numeroPeriodos; i++) {
      this.form.controls[`${this.nivelEducativo}${i}0`].setValue(data[i].porcentaje);
      this.form.controls[`${this.nivelEducativo}${i}1`].setValue(new Date(data[i].fechaInicio.substring(0, 10)));
      this.form.controls[`${this.nivelEducativo}${i}2`].setValue(new Date(data[i].fechaFinal.substring(0, 10)));
    }
  }

  deleteForm() {
    for (let i = 0; i < this.numeroPeriodos; i++) {
      for (let j = 0; j < this.tipoOpciones; j++)
        this.form.removeControl(
          `${this.nivelEducativo}${i}${j}`
        );
    };
  }

  changeFechaInicio(type: string, event: MatDatepickerInputEvent<Date>) {
    let fecha_i = event.value.toISOString().substring(0, 10);
    console.log(fecha_i);
  }

  extractDataFormToSend() {
    let respuestas = [];
    let porcentaje = 0;
    this.fechaValida = true;
    for (let i = 0; i < this.numeroPeriodos; i++) {
      let actualRespuesta = {
        porcentaje: this.form.controls[`${this.nivelEducativo}${i}0`].value,
        fechaInicio: this.form.controls[`${this.nivelEducativo}${i}1`].value,
        fechaFinal: this.form.controls[`${this.nivelEducativo}${i}2`].value,
        idPeriodo: (i + 1),
        idNivelAcademico: this.idNivelEducativo,
        idCampus: this._asistenteService.asistente.idCampus,
        idCicloEscolar: this._asistenteService.asistente.idCicloEscolar,
        totalPeriodos: this.numeroPeriodos
      }
      porcentaje += parseFloat(actualRespuesta.porcentaje);
      respuestas.push(actualRespuesta);
      console.log(typeof (actualRespuesta.fechaFinal));
      if (actualRespuesta.fechaInicio >= actualRespuesta.fechaFinal)
        this.fechaValida = false;
      else
        console.log('FECHAS VALIDAS');
    }
    let requestBody = {
      idCampus: this.asistente.idCampus,
      idCicloEscolar: this.asistente.idCicloEscolar,
      idNivelAcademico: this.idNivelEducativo,
      data: respuestas
    }
    console.log(JSON.stringify(requestBody));
    if(this.fechaValida){
      if (porcentaje == 100) {
      this._periodoAcademicoService.post(JSON.stringify(requestBody)).subscribe({
        next: (data: ResponseService) => {
          console.log(data);
          if (data.errorId == 0) {
            this.openSnackBar('Se guardo periodo academico con éxito', 'Ok');
          }
          else {
            this.openSnackBar('Ocurrió un problema al guardar periodo académico', 'Ok');
          }

        },
        error: error => {
          this.openSnackBar('Ocurrió un problema al guardar periodo académico', 'OK');
          console.log(error);
        }
      })
    }
    else {
      this.openSnackBar('El porcentaje no es igual a 100', 'OK');
    }
    }
    else{
      this.openSnackBar('La información de las fechas proporcionadas es imprecisa', 'OK');
    }
  }

  setIdNivelEducativo(idNivelEducativo) {
    console.log(idNivelEducativo);
    this.idNivelEducativo = idNivelEducativo;
    let queryRoute = `?IdCampus=${this._asistenteService.asistente.idCampus}&IdCicloEscolar=${this._asistenteService.asistente.idCicloEscolar}&IdNivelAcademico=${idNivelEducativo}`;
    this._periodoAcademicoService.getPeriodosAcademicosByQueryRoute(queryRoute)
      .subscribe((data: ResponseService) => {
        console.log(data);
        if (data.data.length > 0) {
          this.ELEMENT_DATA = []
          for (let element = 0; element < data.data.length; element++) {
            this.ELEMENT_DATA.push(
              {
                periodo: element + 1,
                porcentaje: `${this.nivelEducativo}${element}0`,
                fechaInicio: `${this.nivelEducativo}${element}1`,
                fechaFinal: `${this.nivelEducativo}${element}2`,
                idCampus: this._asistenteService.asistente.idCampus,
                idCicloEscolar: this._asistenteService.asistente.idCicloEscolar,
                idNivelAcademico: this.idNivelEducativo,
                totalPeriodos: this.numeroPeriodos
              }
            );
          }
          if (this.numeroPeriodos > 0)
            this.deleteForm();
          this.numeroPeriodos = data.data[0].totalPeriodos;
          this.selected = this.numeroPeriodos;
          this.toggleForm = false;
          this.toggleForm = true;
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.buildForm(this.numeroPeriodos);
          this.buildFormDefaultValues(this.numeroPeriodos, data.data);
          console.log(this.ELEMENT_DATA);
        }
        else if (this.numeroPeriodos > 0) {
          this.setFormElementData(this.numeroPeriodos);
        }
        else {
          this.openSnackBar('Seleccione un periodo', 'OK');
        }
      });
  }

  setPeriodos(data) {
    var allPeriodos = data.data;
    for (let currentPeriodo in allPeriodos) {
      let periodo: PeriodoElement;
      periodo = {
        idPeriodo: allPeriodos[currentPeriodo].idPeriodo,
        numeroPeriodos: allPeriodos[currentPeriodo].numeroPeriodos
      }
      this.ELEMENT_DATA_PERIODOEDUCATIVO.push(periodo);
    }
    this.dataSourcePeriodoAcademico = new MatTableDataSource(this.ELEMENT_DATA_PERIODOEDUCATIVO);
  }

  getNivelesEducativos() {
    let queryRoute = `?IdCampus=${this.asistente.idCampus}&IdCicloEscolar=${this.asistente.idCicloEscolar}`;
    this._nivelEducativoService.getNivelEducativoByExpression(queryRoute)
      .subscribe(data => {
        console.log(data);
        this.setNivelesEducativos(data);
      });
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}


