import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { OrdenTrabajoComponent } from '../../garantia/orden-trabajo/orden-trabajo.component';
import { GarantiaModule } from '../../garantia/garantia.module';
import { GarantiaRoutingModule } from '../../garantia/garantia-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosModule } from '../../usuarios/usuarios.module';
import { ProveedoresModule } from '../../proveedores/proveedores.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
    GarantiaModule,
    UsuariosModule,
    ProveedoresModule

  ],
  declarations: [

    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    //IconsComponent,
    
  //  NotificationsComponent,

  ],
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
