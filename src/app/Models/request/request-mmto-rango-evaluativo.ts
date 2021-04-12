export class Rango {
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  idRangoEvaluativo: number;
  nombreRangoEvaluativo: string;
  abreviatura: string;
  valorMinimo: string;
  valorMaximo: string;
  idColor: number;
  aprobado: boolean;
  activo: boolean;

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.idNivelAcademico = 0;
    this.idRangoEvaluativo = 0;
    this.nombreRangoEvaluativo = '';
    this.abreviatura = '';
    this.valorMinimo = '';
    this.valorMaximo = '';
    this.idColor = 0;
    this.aprobado = false;
    this.activo = false;
  }
}

export class RequestMmtoRangoEvaluativo {
  pToken: string;
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  data: Rango[];

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.idNivelAcademico = 0;
    this.data = new Array<Rango>();
  }
}
