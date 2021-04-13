export class RequestMmtoGrupoNivelAcademico {
  pToken: string;
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  data: Grupo[];
}

export class Grupo {
  idCampus: number;
  idCicloEscolar: number;
  idNivelAcademico: number;
  idGrado: number;
  idGrupo: number;
  activo: boolean;

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.idNivelAcademico = 0;
    this.idGrado = 0;
    this.idGrupo = 0;
    this.activo = false;
  }
}
