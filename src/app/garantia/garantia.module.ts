import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarantiaRoutingModule } from './garantia-routing.module';
import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';
import { ListTrabajoComponent } from './list-trabajo/list-trabajo.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { ActualizarOrdenComponent } from './actualizar-orden/actualizar-orden.component';
import { FiltroOrdenPipe } from './filtroPipe/filtro-orden.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CrearDialogoComponent } from './vista/crear-dialogo/crear-dialogo.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [OrdenTrabajoComponent, ListTrabajoComponent, CrearOrdenComponent, DetalleOrdenComponent, ActualizarOrdenComponent, FiltroOrdenPipe, CrearDialogoComponent],
  imports: [
    CommonModule,
    GarantiaRoutingModule,
    LayoutModule,
    RouterModule,

    MatDatepickerModule,
    MatNativeDateModule,
    


    //modulos para los formularios reactivos
    MaterialModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [
    OrdenTrabajoComponent
  ]
})
export class GarantiaModule { }
