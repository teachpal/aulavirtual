import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComEmpresaService {
  public idEmpresa: number;
  private enviarEmpresaSubject = new Subject<number>();
  public enviarEmpresaObservable =  this.enviarEmpresaSubject.asObservable();
  
  enviarEmpresa(idEmpresa: number){
    this.idEmpresa = idEmpresa;
    this.enviarEmpresaSubject.next(idEmpresa);
  }
}
