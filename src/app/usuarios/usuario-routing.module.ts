import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { ListarComponent } from './listar/listar.component';
import { UsuarioComponent } from './usuario/usuario.component';



const routes: Routes = [

    {
        path: 'usuario',
        children: [
          //  { path: 'trabajo', component: OrdenTrabajoComponent },
          { path: 'listar', component: ListarComponent},
          { path: 'crear', component: UsuarioComponent },
          { path: 'actualizar', component: EditarUsuariosComponent },
          { path: '**', redirectTo: 'listar' },
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }