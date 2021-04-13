export class Empresa {
    apellidoMaterno: string;
    apellidoPaterno: string;
    calle: string;
    codigoPostal: number;
    colonia: string;
    correoElectronico: string;
    idCiudad: number;
    idEmpresa: number;
    idEstado: number;
    idPais: number;
    idRegimenFiscal: number;
    nombre: string;
    numeroExterior: string;
    numeroInterior: string;
    razonSocial: string;
    rfc: string;

    constructor(){
        this.apellidoMaterno = '';
        this.apellidoPaterno = '';
        this.calle = '';
        this.codigoPostal = 0;
        this.colonia = '';
        this.correoElectronico  = '';;
        this.idCiudad = 0;
        this.idEmpresa = 0;
        this.idEstado = 0;
        this.idPais = 0;
        this.idRegimenFiscal = 0;
        this.nombre  = '';
        this.numeroExterior = '';
        this.numeroInterior = '';
        this.razonSocial = '';
        this.rfc = '';
    }
}
