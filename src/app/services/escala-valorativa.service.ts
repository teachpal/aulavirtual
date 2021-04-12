import { RequestMmtoEscalaValorativa } from './../Models/request/request-mmto-escala-valorativa';
import { ResponseService } from './../Models/response/response-service';
import { RequestEscalaValorativa } from './../Models/request/request-escala-valorativa';
import { environment } from './../../environments/environment.test';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EscalaValorativaService {

  endPoint = "/EscalaValorativa";
  baseUrl: string = environment.backend.baseURL;
  httpHeader = {
    headers: new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET, PUT, POST')
    .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private httpClient: HttpClient) {}

  getEscalaEvaluativa(request: RequestEscalaValorativa): Observable<ResponseService> {
    const IdCampus = request.IdCampus == null ? "" : "IdCampus=" + request.IdCampus;
    const IdCicloEscolar = request.IdCicloEscolar == null ? "" : "&IdCicloEscolar=" + request.IdCicloEscolar;
    const IdNivelAcademico = request.IdNivelAcademico == null ? "" : "&idNivelAcademico=" + request.IdNivelAcademico;
    const attributes = IdCampus + IdCicloEscolar +  IdNivelAcademico;

    return this.httpClient
      .get<ResponseService>(this.baseUrl + this.endPoint + "?" + attributes)
      .pipe(retry(1), catchError(this.httpError));
  }

  getTiposEscalaValoratiba(request: string): Observable<ResponseService> {
    const endPoint = '/obtenerTipoEscalaValorativaLista';
    return this.httpClient
      .get<ResponseService>(this.baseUrl + this.endPoint + endPoint + "?pToken=" + request)
      .pipe(retry(1), catchError(this.httpError));
  }

  postEscalaEvaluativa(request: RequestMmtoEscalaValorativa): Observable<ResponseService>{
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(request), this.httpHeader)
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
    return throwError(msg);
  }
}
