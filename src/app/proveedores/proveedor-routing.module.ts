import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';


const routes: Routes = [

    {
        path: 'proveedor',
        children: [
            //  { path: 'trabajo', component: OrdenTrabajoComponent },

            { path: 'proveedores', component: ProveedorComponent },
            { path: 'nuevoProveedor', component: NuevoProveedorComponent },
            { path: '**', redirectTo: 'proveedores' },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProveedorRoutingModule { }