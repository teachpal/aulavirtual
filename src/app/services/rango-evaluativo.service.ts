import { RequestMmtoRangoEvaluativo } from './../Models/request/request-mmto-rango-evaluativo';
import { ResponseService } from 'src/app/Models/response/response-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RangoEvaluativoService {
  endPoint = "/RangoEvaluativo";
  baseUrl: string = environment.backend.baseURL;
  httpHeader = {
    headers: new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET, PUT, POST')
    .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private httpClient: HttpClient) {}

  getRangosEvaluativos(request: any){
    const IdCampus = request.IdCampus == null ? "" : "IdCampus=" + request.IdCampus;
    const IdCicloEscolar = request.IdCicloEscolar == null ? "" : "&IdCicloEscolar=" + request.IdCicloEscolar;
    const IdNivelAcademico = request.IdNivelAcademico  == null ? "" : "&IdNivelAcademico=" + request.IdNivelAcademico;
    const attributes = IdCampus + IdCicloEscolar + IdNivelAcademico;

    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + "?" + attributes)
    .pipe(retry(1), catchError(this.httpError));
  }

  getColores(){
    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + "/obtenerColoresLista")
    .pipe(retry(1), catchError(this.httpError));
  }

  postRangoEvaluativo(request: RequestMmtoRangoEvaluativo){
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(request), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
