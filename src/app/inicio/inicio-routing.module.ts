import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from '../auth/guards/validar-token.guard';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'principal', component:PrincipalComponent},
      { path: '', redirectTo: 'principal' },
    ],
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
