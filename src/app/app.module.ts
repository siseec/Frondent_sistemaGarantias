import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

//import { UserProfileComponent } from './user-profile/user-profile.component';
//import { TableListComponent } from './table-list/table-list.component';
//import { TypographyComponent } from './typography/typography.component';
//import { IconsComponent } from './icons/icons.component';
//import { NotificationsComponent } from './notifications/notifications.component';
//import {  AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GarantiaModule } from './garantia/garantia.module';



import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BrowserModule,
   // GarantiaModule,
   
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
