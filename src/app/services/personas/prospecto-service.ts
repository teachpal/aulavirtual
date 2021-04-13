import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../../Models/response/response-service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  _url = '/Prospecto'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http: HttpClient) { }

  post(persona) {
    const url = this.baseUrl + this._url;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, persona, {
      headers: headers
    });
  }

}
