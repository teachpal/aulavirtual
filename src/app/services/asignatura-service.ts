import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../Models/response/response-service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  _url = '/Asignatura'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http: HttpClient) {
    
   }

  getllAsignaturas() {
    const url = this.baseUrl + this._url;
    console.log(url);
    let header = new HttpHeaders()
      .set('Content-Type', 'aplication/json');

    return this.http
      .get<ResponseService>(url).pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  post(area) {
    const url = this.baseUrl + this._url;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, area, {
      headers: headers
    });
  }

  put(area){
    const url =this.baseUrl +this._url;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,area,  {
      headers : headers
    });
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
