class Escala {
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  nombreNivelAcademico: string;
  idTipoEscalaValorativa: number;
  valorMinimo: string;
  valorMaximo: string;

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.idNivelAcademico = 0;
    this.nombreNivelAcademico = '';
    this.idTipoEscalaValorativa = 0;
    this.valorMinimo = '';
    this.valorMaximo = '';
  }
}

export class RequestMmtoEscalaValorativa {
  pToken: string;
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  data: Escala[];

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.idNivelAcademico = 0;
    this.data = new Array<Escala>();
  }
}
