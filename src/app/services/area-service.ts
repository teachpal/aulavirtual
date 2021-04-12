import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, timeout } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../Models/response/response-service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  _url = '/Area'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http: HttpClient) { }

  getllAreas() {
    const url = this.baseUrl + this._url;
    console.log(url);
    let header = new HttpHeaders()
      .set('Content-Type', 'aplication/json');

    return this.http
      .get<ResponseService>(url);
  }

  //   getNivelEducativoByExpression(queryRoute){
  //     const url =this.baseUrl +this._url + queryRoute;
  //     console.log(url);
  //     let header= new HttpHeaders()
  //     .set('Content-Type', 'aplication/json');

  //     return this.http
  //       .get(url).pipe(
  //         timeout(10000)
  //       );
  //   }

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

}
