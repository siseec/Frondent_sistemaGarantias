import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
  
  // {
  //   path: 'orden',
  //   children: [
  //     //  { path: 'trabajo', component: OrdenTrabajoComponent },
  //     { path: 'listar', component: ListTrabajoComponent },
  //     { path: 'crear', component: CrearOrdenComponent },
  //     { path: 'actualizar', component: ActualizarOrdenComponent },
  //     { path: 'detalle', component: DetalleOrdenComponent },
  //     { path: '**', redirectTo: 'listar' },
  //   ]
  // },

  // {
  //   path: 'usuario',
  //   children: [
  //     //  { path: 'trabajo', component: OrdenTrabajoComponent },
  //     { path: 'listar', component: ListarComponent },
  //     { path: 'crear', component: UsuarioComponent },
  //     { path: 'actualizar', component: EditarUsuariosComponent },
  //     { path: '**', redirectTo: 'listar' },
  //   ]
  // },

  // {
  //   path: 'proveedor',
  //   children: [
  //     //  { path: 'trabajo', component: OrdenTrabajoComponent },

  //     { path: 'proveedores', component: ProveedorComponent },
  //     { path: 'nuevoProveedor', component: NuevoProveedorComponent },
  //     { path: '**', redirectTo: 'proveedores' },
  //   ]
  // },

  { path: '**', redirectTo: 'orden' }

];
