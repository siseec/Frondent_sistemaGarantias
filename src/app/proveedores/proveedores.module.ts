import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { FiltradoPipe } from './filtradoProveedor/filtrado.pipe';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NuevoProveedorComponent,ProveedorComponent,FiltradoPipe],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    RouterModule,
  ]
})
export class ProveedoresModule { }
