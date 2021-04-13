import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  _url= '/Campus'
  baseUrl: string = environment.backend.baseURL; //http://198.71.50.5:5001/api

  constructor(private http: HttpClient) {
  }

  getCampus(){
    const header = new HttpHeaders()
    .set('Content-Type', 'aplication/json');

    return this.http.get(this.baseUrl + this._url, {
      headers: header
    });
  }


}
