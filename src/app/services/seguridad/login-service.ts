import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, retry, timeout } from 'rxjs/operators'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../../Models/response/response-service';
import { UsuarioElement } from 'src/app/interfaces/usuario-element';
import { UsuarioStorageService } from './usuario-storage-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    _url = '/Usuario/AutenticarUsuario'
    baseUrl: string = environment.backend.baseURLSeguridad; //http://198.71.50.5:5001/api
    //baseUrl : string = 'http://198.71.50.5:5000/api'
    //baseUrl: string = 'http://localhost:57497/api'
    constructor(private http: HttpClient, private userStorageService: UsuarioStorageService) {
       
    }

    post(credentials) {
        const url = this.baseUrl + this._url;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, credentials, {
            headers: headers
        }).pipe(
            map((user: ResponseService) => {
                console.log(user);
                return user;
            }))
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
