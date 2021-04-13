import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../../Models/response/response-service';
import { EmpresaQFcons } from '../../Models/request/tesoreria/empresa-qf-cons'
import { EmpresaRequestMtto } from '../../Models/request/tesoreria/empresa-request-mtto';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EmpresaConfiguracionRequestCons } from 'src/app/Models/request/tesoreria/empresa-configuracion-request-cons';
import { EmpresaConfiguracionRequestMtto } from 'src/app/Models/request/tesoreria/empresa-configuracion-request-mtto';
import { EncabezadoRequestCons } from 'src/app/Models/request/tesoreria/encabezado-request-cons';
import { EncabezadoRequestMtto } from 'src/app/Models/request/tesoreria/encabezado-request-mtto';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  endPoint = "";
  baseUrl: string = environment.backend.baseURLTesoreria;
  httpHeader = {
    headers: new HttpHeaders()
    .append('Content-Type', 'application/json').append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET, POST') .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private httpClient: HttpClient) {}

  //#region Empresa
  getEmpresa(empresa: EmpresaQFcons)
  {
    this.endPoint = "/Empresa";
    let queryParams = `?IdEmpresa=${empresa.IdEmpresa}`;
    console.log(this.baseUrl + this.endPoint + queryParams);
    
    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + queryParams)
    .pipe(retry(1), catchError(this.httpError));
  }

  postEmpresa(empresa: EmpresaRequestMtto){
    this.endPoint = "/Empresa";
    console.log(this.baseUrl + this.endPoint,  JSON.stringify(empresa), this.httpHeader);
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(empresa), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  //#region 

  //#region Configuracion
  getContiguracion(configuracion: EmpresaConfiguracionRequestCons){
    this.endPoint = "/Empresa_Configuracion";
    let queryParams = `?IdEmpresa=${configuracion.IdEmpresa}`;
    console.log(this.baseUrl + this.endPoint + queryParams);
    
    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + queryParams)
    .pipe(retry(1), catchError(this.httpError));
  }

  postConfiguracion(configuracion: EmpresaConfiguracionRequestMtto){
    this.endPoint = "/Empresa_Configuracion";
    console.log(this.baseUrl + this.endPoint,  JSON.stringify(configuracion), this.httpHeader);
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(configuracion), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  //#region 

  //#region Encabezados
  getEncabezados(encabezado: EncabezadoRequestCons){
    this.endPoint = "/Encabezado";
    let queryParams = `?IdEmpresa=${encabezado.idEmpresa}`;
    console.log(this.baseUrl + this.endPoint + queryParams);
    
    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + queryParams)
    .pipe(retry(1), catchError(this.httpError));
  }

  postEncabezado(encabezado: EncabezadoRequestMtto){
    this.endPoint = "/Encabezado";
    console.log(this.baseUrl + this.endPoint,  JSON.stringify(encabezado), this.httpHeader);
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(encabezado), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  //#region 

  //#region Cuentas
  getCuentas(){
    this.endPoint = "/Cuentas";
  }

  postCuenta(){
    this.endPoint = "/Cuentas";
  }
  //#region 
  
  httpError(error) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
