import { RequestMmtoCicloEscolar } from './../Models/request/request-mmto-ciclo-escolar';
import { ResponseService } from "./../Models/response/response-service";
import { RequestCicloEscolar } from "./../Models/request/request-ciclo-escolar";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Servicio } from '../Models/servicio';

@Injectable({providedIn: "root"})
export class CicloEscolarService {
  endPoint = "/CicloEscolar";
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api
  httpHeader = {
    headers: new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET, PUT, POST')
    .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private httpClient: HttpClient) {}

  getCicloEscolar(request: RequestCicloEscolar): Observable<ResponseService> {
    const pToken = request.pToken == null ? "" : "pToken=" + request.pToken;
    const IdCampus = request.IdCampus == null ? "" : "&IdCampus=" + request.IdCampus;
    const IdCicloEscolar = request.IdCicloEscolar == null ? "" : "&IdCicloEscolar=" + request.IdCicloEscolar;
    const FechaInicio = request.FechaInicio == null ? "" : "&FechaInicio=" + request.FechaInicio;
    const FechaFinal = request.FechaFinal == null ? "" : "&FechaFinal=" + request.FechaFinal;
    const Activo = request.Activo == null ? "" : "&Activo=" + request.Activo;
    const attributes = pToken + IdCampus + IdCicloEscolar + FechaInicio + FechaFinal + Activo;

    return this.httpClient
      .get<ResponseService>(this.baseUrl + this.endPoint + "?" + attributes)
      //.pipe(retry(1), catchError(this.httpError));
  }

  postCicloEscolar(request: RequestMmtoCicloEscolar): Observable<ResponseService>{
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(request), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  putCicloEscolar(request: RequestMmtoCicloEscolar): Observable<ResponseService> {
    return this.httpClient.put<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(request), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
