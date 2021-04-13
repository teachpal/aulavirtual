import { ComAsistenteEducativoService } from './../../../services/com-asistente-educativo.service';
import { AsistenteAcademicoComponents } from './../../../Models/asistente-academico-components';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { ComponentList } from "./component-list/component-list.enum";
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatStepper } from "@angular/material/stepper";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"],
})
export class MainComponent implements OnInit {
  isLinear = true;
  enumComponentes = ComponentList;
  @ViewChild("stepper") stepper: MatStepper;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  asistente = new AsistenteAcademicoComponents();

  constructor(private _cd: ChangeDetectorRef, private _snackBar: MatSnackBar, private servicioComunicacion: ComAsistenteEducativoService) {
  }

  ngOnInit(): void {
    this.servicioComunicacion.enviarAsistenteObservable.subscribe(asistente => {
      this.asistente = asistente;
    });
  }

  //#region FlujoStepper
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  siguiente(idComponente: number) {
    switch (idComponente) {
      case this.enumComponentes.CicloEscolar:
        if (this.asistente.idCicloEscolar > 0) {
          this.stepper.selected.completed = true;
          this.stepper.next();
        } else {
          this.openSnackBar(
            "Es necesario seleccionar un ciclo para continuar",
            "Ignorar"
          );
        }
        break;
      case this.enumComponentes.NivelEducativo:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      case this.enumComponentes.PeriodoAcademico:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      case this.enumComponentes.EscalaValorativa:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      case this.enumComponentes.RangoEvaluativo:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      case this.enumComponentes.Grados:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      case this.enumComponentes.Grupos:
        this.stepper.selected.completed = true;
        this.stepper.next();
        break;
      default:
        break;
    }

    this._cd.markForCheck();
  }

  atras(idComponente: number) {
    for (let index = 1; index < 876; index++) {
      if (idComponente > index){
        this.stepper.selected.completed = true;
      }else{
        this.stepper.selected.completed = false;
      }
    }
    this._cd.markForCheck();
  }
  //#endregion

}
