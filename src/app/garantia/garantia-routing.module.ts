import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';
import { ListTrabajoComponent } from './list-trabajo/list-trabajo.component';
import { ActualizarOrdenComponent } from './actualizar-orden/actualizar-orden.component';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';

const routes: Routes = [
  {
    //  path: 'orden',
    //  children: [
    //   { path: '/actualizar', component: ActualizarOrdenComponent },
    //   { path: '/detalle', component: DetalleOrdenComponent },
    // //   { path: '**', redirectTo: 'orden' }
    // ]
  //
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarantiaRoutingModule { }
