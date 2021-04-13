import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class EncabezadoRequestMtto{
    idEmpresa: number;
    idEncabezado: number;
    nombre: string;
    titulo: string;
    primeraImagen: string;
    segundaImagen: string;
    terceraImagen: string;
    activo: boolean;

    constructor(){
        this.idEmpresa = 0;
        this.idEncabezado = 0;
        this.nombre = '';
        this.titulo = '';
        this.primeraImagen = '';
        this.segundaImagen = '';
        this.terceraImagen = '';
        this.activo = false;
    }
}