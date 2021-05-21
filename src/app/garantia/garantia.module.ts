import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { GarantiaRoutingModule } from './garantia-routing.module';
import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';
import { ListTrabajoComponent } from './list-trabajo/list-trabajo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { AdminLayoutRoutes } from 'app/layouts/admin-layout/admin-layout.routing';
import { ActualizarOrdenComponent } from './actualizar-orden/actualizar-orden.component';
import { FiltroOrdenPipe } from './filtroPipe/filtro-orden.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [OrdenTrabajoComponent, ListTrabajoComponent, CrearOrdenComponent, DetalleOrdenComponent, ActualizarOrdenComponent, FiltroOrdenPipe],
  imports: [
    CommonModule,
   GarantiaRoutingModule,
    LayoutModule,
    RouterModule,
   // BrowserModule,
    //modulos para los formularios reactivos
  MaterialModule,
  MatCardModule,
  ],
  exports:[
    OrdenTrabajoComponent
  ]
})
export class GarantiaModule { }
