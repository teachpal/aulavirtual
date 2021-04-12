import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import {environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodoAcademicoService {

  _url= '/PeriodoAcademico'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http:HttpClient) { }

  getllPeriodosAcademicos(){
    const url =this.baseUrl +this._url + "/obtenerNumeroPeriodosLista";
    console.log(url);
    let header= new HttpHeaders()
    .set('Content-Type', 'aplication/json');

    return this.http
      .get(url).pipe(
        timeout(10000)
      );
  }

  getPeriodosAcademicosByQueryRoute(queryExpression:string){
    const url =this.baseUrl +this._url + queryExpression;
    console.log(url);
    let header= new HttpHeaders()
    .set('Content-Type', 'aplication/json');

    return this.http
      .get(url).pipe(
        timeout(10000)
      );
  }

  post(periododAcademico){
    const url =this.baseUrl +this._url;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,periododAcademico,  {
      headers : headers
    });
  }
}
