import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:'inicio',
    children:[
      {path: 'principal', component:PrincipalComponent},
      { path: '', redirectTo: 'principal' },
      { path: '**', redirectTo: 'principal' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
