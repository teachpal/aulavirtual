export class EmpresaRequestMtto {
    IdEmpresa: number;
    IdRegimenFiscal: number;
    RFC: string;
    Calle: string;
    NumeroExterior: string;
    NumeroInterior: string;
    Colonia: string;
    IdCiudad: number;
    IdEstado: number;
    IdPais: number;
    CodigoPostal: number;
    CorreoElectronico: string;
    PersonaMoral: PersonaMoral;
    PersonaFisica: PersonaFisica;

    constructor(){
        this.IdEmpresa = 0;
        this.IdRegimenFiscal = 0;
        this.RFC = '';
        this.Calle = '';
        this.NumeroExterior = '';
        this.NumeroInterior = '';
        this.Colonia = '';
        this.IdCiudad = 0;
        this.IdEstado = 0;
        this.IdPais = 0;
        this.CodigoPostal = 0;
        this.CorreoElectronico = '';
        this.PersonaMoral =  new PersonaMoral();
        this.PersonaFisica = new PersonaFisica();
    }
}
  
class PersonaFisica {
    Nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;

    constructor(){
        this.Nombre = '';
        this.ApellidoMaterno = '';
        this.ApellidoPaterno = '';
    }
}
  
class PersonaMoral {
    RazonSocial: string;
    constructor(){
        this.RazonSocial = '';
    }
}