import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'areas',
    loadChildren: () =>
      import('./areas/areas.module').then((m) => m.AreasModule),
  },
  {
    path: 'asignaturas',
    loadChildren: () =>
      import('./asignaturas/asignaturas.module').then((m) => m.AsignaturasModule),
  },
  {
    path: 'asistente',
    loadChildren: () =>
      import('./asistente/asistente.module').then((m) => m.AsistenteModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
