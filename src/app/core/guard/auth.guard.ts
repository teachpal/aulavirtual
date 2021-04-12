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
export class AuthGuard implements CanActivate {
  usuarioActual;
  constructor(private authService: AuthService, private router: Router, private usuarioStorageService: UsuarioStorageService) {
    this.usuarioStorageService.currentUserObservable.subscribe( data => {
      this.usuarioActual = data;
    })
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.usuarioStorageService.usuarioActual);
    if (this.usuarioActual) {
      const userRole = this.usuarioStorageService.usuarioActual.nombreRol;
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        //this.router.navigate(['/authentication/signin']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
