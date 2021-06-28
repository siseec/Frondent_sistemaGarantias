import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CambioProductoProveedorComponent } from './cambio-producto-proveedor/cambio-producto-proveedor.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    CambioProductoProveedorComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    ListarProductoComponent
  ]
})
export class ProductoModule { }
