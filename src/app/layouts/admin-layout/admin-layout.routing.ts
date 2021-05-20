import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';

//import { NotificationsComponent } from '../../notifications/notifications.component';
import { OrdenTrabajoComponent } from '../../garantia/orden-trabajo/orden-trabajo.component';
import { ListTrabajoComponent } from '../../garantia/list-trabajo/list-trabajo.component';
import { CrearOrdenComponent } from '../../garantia/crear-orden/crear-orden.component';
import { ActualizarOrdenComponent } from '../../garantia/actualizar-orden/actualizar-orden.component';
import { DetalleOrdenComponent } from '../../garantia/detalle-orden/detalle-orden.component';
import { ListarComponent } from '../../usuarios/listar/listar.component';
import { EditarUsuariosComponent } from '../../usuarios/editar-usuarios/editar-usuarios.component';
import { UsuarioComponent } from 'app/usuarios/usuario/usuario.component';
import { ProveedorComponent } from '../../proveedores/proveedor/proveedor.component';
import { NuevoProveedorComponent } from '../../proveedores/nuevo-proveedor/nuevo-proveedor.component';

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  {
    path: 'orden',
    children: [
      //  { path: 'trabajo', component: OrdenTrabajoComponent },
      { path: 'listar', component: ListTrabajoComponent },
      { path: 'crear', component: CrearOrdenComponent },
      { path: 'actualizar', component: ActualizarOrdenComponent },
      { path: 'detalle', component: DetalleOrdenComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  },

  {
    path: 'usuario',
    children: [
      //  { path: 'trabajo', component: OrdenTrabajoComponent },
      { path: 'listar', component: ListarComponent },
      { path: 'crear', component: UsuarioComponent },
      { path: 'actualizar', component: EditarUsuariosComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  },

  {
    path: 'proveedor',
    children: [
      //  { path: 'trabajo', component: OrdenTrabajoComponent },

      { path: 'proveedores', component: ProveedorComponent },
      { path: 'nuevoProveedor', component: NuevoProveedorComponent },
      { path: '**', redirectTo: 'proveedores' },
    ]
  },

  { path: '**', redirectTo: 'orden' }

];
