export class EmpresaConfiguracionRequestMtto {
    IdEmpresa: number;
    NombreEmpresa: string;
    IdentificadorFactura: string;
    CodigoRecibo: number;

    constructor(){
        this.IdEmpresa = 0;
        this.NombreEmpresa = '';
        this.IdentificadorFactura = '';
        this.CodigoRecibo = 0;
    }
}