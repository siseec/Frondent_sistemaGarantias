import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { GarantiaModule } from '../../garantia/garantia.module';
import { UsuariosModule } from '../../usuarios/usuarios.module';
import { ProveedoresModule } from '../../proveedores/proveedores.module';
import { AuthModule } from '../../auth/auth.module';
import { ClienteModule } from '../../clientes/cliente.module';
import { InicioModule } from '../../inicio/inicio.module';
import { ProductoModule } from '../../producto/producto.module';

@NgModule({
  imports: [
    CommonModule,
  //  RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
    RouterModule,
    GarantiaModule,
    UsuariosModule,
    ProveedoresModule,
    AuthModule,
    ClienteModule,
    InicioModule,
    ProductoModule

  ],
  declarations: [],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})

export class AdminLayoutModule {}
