import { AsistenteAcademicoComponents } from './../Models/asistente-academico-components';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComAsistenteEducativoService {
  asistente: AsistenteAcademicoComponents;
  private enviarAsistenteSubject = new Subject<AsistenteAcademicoComponents>();
  enviarAsistenteObservable = this.enviarAsistenteSubject.asObservable();

  enviarAsistente(asistente: AsistenteAcademicoComponents) {
    this.asistente = asistente;
    this.enviarAsistenteSubject.next(asistente);
  }

}
