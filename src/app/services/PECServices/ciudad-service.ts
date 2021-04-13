import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponseService } from '../../Models/response/response-service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  _url = '/Ciudad'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http: HttpClient) { }

  getCiudadByExpression(queryExpression) {
    const url = this.baseUrl + this._url;
    console.log(url);
    let header = new HttpHeaders()
      .set('Content-Type', 'aplication/json');

    return this.http
      .get<ResponseService>(url + queryExpression);
  }


}
