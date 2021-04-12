export class RequestMmtoCicloEscolar {
  idCampus: number;
  idCicloEscolar: number;
  fechaInicio: string;
  fechaFinal: string;
  activo: boolean;

  constructor(){
    this.idCampus = null;
    this.idCicloEscolar = null;
    this.fechaInicio = null;
    this.fechaFinal = null;
    this.activo = null;
  }
}
