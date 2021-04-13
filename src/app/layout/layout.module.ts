import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { UsuarioStorageService } from '../services/seguridad/usuario-storage-service';

@NgModule({
  imports: [CommonModule, NgbModule, MatTabsModule],
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  providers: [UsuarioStorageService]
})
export class LayoutModule {}
