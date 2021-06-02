import { NgModule } from '@angular/core';
//import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'orden',
  //   pathMatch: 'full',
  // }, 
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },

  {
    path: '**',
    redirectTo: 'orden'
  }

];

@NgModule({
  imports: [
    //  CommonModule,
    // BrowserModule,
    RouterModule.forRoot(routes)
    // { relativeLinkResolution: 'legacy' }
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
