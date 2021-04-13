
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuarioElement } from 'src/app/interfaces/usuario-element';
import { ResponseService } from 'src/app/Models/response/response-service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioStorageService {

    private currentUserSubject: BehaviorSubject<UsuarioElement>;
    public currentUserObservable: Observable<UsuarioElement>;


    constructor() {
        this.currentUserSubject = new BehaviorSubject<UsuarioElement>(
            JSON.parse(sessionStorage.getItem('usuario'))
        );
        this.currentUserObservable = this.currentUserSubject.asObservable();
    }

    public get usuarioActual(): UsuarioElement {
        return this.currentUserSubject.value;
    }

    enviarUsuario(response: ResponseService) {
        if (response.data.length > 0) {
            let usuario: UsuarioElement = response.data[0];
            usuario.token = response.token;
            sessionStorage.setItem('usuario', JSON.stringify(usuario))
            this.currentUserSubject.next(usuario);
        }

    }

    eliminarUsuario() {
        sessionStorage.removeItem('usuario');
        this.currentUserSubject.next(null);
    }

}
