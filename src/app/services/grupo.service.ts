import { RequestMmtoGrupoNivelAcademico } from '../Models/request/request-mmto-grupo-nivel-academico';
import { RequestGrupoNivelAcademico } from './../Models/request/request-grupo-nivel-academico';
import { ResponseService } from 'src/app/Models/response/response-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RequestGrupo } from '../Models/request/request-grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  endPoint = "";
  baseUrl: string = environment.backend.baseURL;
  httpHeader = {
    headers: new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', 'GET, PUT, POST')
    .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private httpClient: HttpClient) {}

  //#region Grupo Nivel Academico 
  getGruposNivelAcademico(request: RequestGrupoNivelAcademico){
    this.endPoint = "/NivelAcademico_Grupo";
    const IdCampus = request.idCampus == null ? "" : "IdCampus=" + request.idCampus;
    const IdCicloEscolar = request.idCicloEscolar == null ? "" : "&IdCicloEscolar=" + request.idCicloEscolar;
    const IdNivelAcademico = request.idNivelAcademico  == null ? "" : "&IdNivelAcademico=" + request.idNivelAcademico;
    const attributes = IdCampus + IdCicloEscolar + IdNivelAcademico;

    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + "?" + attributes)
    .pipe(retry(1), catchError(this.httpError));
  }

  postGruposNivelAcademico(request: RequestMmtoGrupoNivelAcademico){
    this.endPoint = "/NivelAcademico_Grupo";
    return this.httpClient.post<ResponseService>(this.baseUrl + this.endPoint , JSON.stringify(request), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  //#endregion

  //#region Grupo
  getGrupos(request: RequestGrupo){
    this.endPoint = "/Grupo";
    const pToken = request.pToken == null ? "" : "pToken=" + request.pToken;
    const IdGrupo = request.IdGrupo  == null ? "" : "&IdGrupo=" + request.IdGrupo;
    const NombreGrupo = request.NombreGrupo  == null ? "" : "&NombreGrupo=" + request.NombreGrupo;
    const Activo = request.Activo  == null ? "" : "&Activo=" + request.Activo;
    const attributes = pToken + IdGrupo + NombreGrupo + Activo;

    return this.httpClient
    .get<ResponseService>(this.baseUrl + this.endPoint + "?" + attributes)
    .pipe(retry(1), catchError(this.httpError));
  }

  //#endregion
  
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
