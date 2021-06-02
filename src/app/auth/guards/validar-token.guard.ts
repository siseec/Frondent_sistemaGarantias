import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    return this.auth.validarToken()
      .pipe(
        tap(valido => {
         console.log(valido);
          if (!valido) {
            
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this.auth.validarToken()
      .pipe(
        tap(valido => {
          if (!valido) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      );;
  }
}
