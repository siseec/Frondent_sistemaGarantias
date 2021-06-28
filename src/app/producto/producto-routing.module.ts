import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CambioProductoProveedorComponent } from './cambio-producto-proveedor/cambio-producto-proveedor.component';

const routes: Routes = [
  {
    path:'',
    children: [
     // { path: 'listar', component: ListarProductoComponent },
      { path: 'crear', component: CrearProductoComponent },
      { path: 'cambioproveedor', component: CambioProductoProveedorComponent },
      
      { path: '**', redirectTo: 'crear' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
