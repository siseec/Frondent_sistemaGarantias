import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductoComponent } from './listar-producto.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarProductoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    ListarProductoComponent
  ]
})
export class ListaProductoModule { }
