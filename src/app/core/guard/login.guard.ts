import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { UsuarioStorageService } from 'src/app/services/seguridad/usuario-storage-service';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    usuarioActual;
    constructor(private authService: AuthService, private router: Router, private usuarioStorageService: UsuarioStorageService) {
        this.usuarioStorageService.currentUserObservable.subscribe(data => {
            this.usuarioActual = data;
        });
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this.usuarioStorageService.usuarioActual);
        const userRoleExists = this.usuarioActual == null ? false : true;
        if (userRoleExists) {
            this.router.navigate(['/admin']);
            return false;
        }
        return true;
    }
}
