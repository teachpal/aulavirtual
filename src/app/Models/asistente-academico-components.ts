export class AsistenteAcademicoComponents {
  public idCampus: number;
  public idCicloEscolar: number;
  public cicloEscolarStatus: boolean;
  public nombreCicloEscolar: string;
  public idNivelEducativo: number;
  public idPeriodoAcademico: number;
  public idEscalaValorativa: number;
  public idRangoEvaluativo: number;
  public idGrado: number;
  public idGrupo: number;
  public resetGrid : boolean;

  constructor(){
    this.idCampus = 0;
    this.idCicloEscolar = 0;
    this.nombreCicloEscolar = '';
    this.idNivelEducativo = 0;
    this.idPeriodoAcademico = 0;
    this.idEscalaValorativa = 0;
    this.idRangoEvaluativo = 0;
    this.idGrado = 0;
    this.idGrupo = 0;
    this.resetGrid = false;
  }
}
