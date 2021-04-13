import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResponseService } from '../../Models/response/response-service';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegimenFiscalService {

  endPoint = "";
    baseUrl: string = environment.backend.baseURLTesoreria;
    httpHeader = {
      headers: new HttpHeaders()
      .append('Content-Type', 'application/json').append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET, POST') .append('Access-Control-Allow-Origin', '*')
    };

    constructor(private httpClient: HttpClient) {}


    getRegimenFiscal(){
        this.endPoint = "/RegimenFiscal";

        return this.httpClient
        .get<ResponseService>(this.baseUrl + this.endPoint)
        .pipe(retry(1), catchError(this.httpError));
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