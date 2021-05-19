import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListarComponent } from './listar/listar.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FiltroUsuariosPipe } from './filtrosUsuarios/filtro-usuarios.pipe';



@NgModule({
  declarations: [UsuarioComponent,ListarComponent,
    EditarUsuariosComponent,FiltroUsuariosPipe],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    RouterModule,
    MaterialModule,
    

  ]
})
export class UsuariosModule { }
