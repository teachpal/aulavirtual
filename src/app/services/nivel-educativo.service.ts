import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import {environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NivelEducativoService {

  _url= '/CicloEscolar_NivelAcademico'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http:HttpClient) { }

  getllNivelesEducativos(){
    const url =this.baseUrl +this._url;
    console.log(url);
    let header= new HttpHeaders()
    .set('Content-Type', 'aplication/json');

    return this.http
      .get(url).pipe(
        timeout(10000)
      );
  }

  getNivelEducativoByExpression(queryRoute){
    const url =this.baseUrl +this._url + queryRoute;
    console.log(url);
    let header= new HttpHeaders()
    .set('Content-Type', 'aplication/json');

    return this.http
      .get(url).pipe(
        timeout(10000)
      );
  }

  post(cursoNivelEducativo){
    const url =this.baseUrl +this._url;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,cursoNivelEducativo,  {
      headers : headers
    });
  }
}
