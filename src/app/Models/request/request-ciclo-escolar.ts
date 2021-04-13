export class RequestCicloEscolar {
    public pToken: string;
    public IdCampus: number;
    public IdCicloEscolar: number;
    public FechaInicio: string;
    public FechaFinal: string;
    public Activo: boolean;

    constructor(){
        this.pToken = null;
        this.IdCampus = null;
        this.IdCicloEscolar = null;
        this.FechaInicio = null;
        this.FechaFinal = null;
        this.Activo = null;
    }
}
