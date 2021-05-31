import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorConexion } from '../../../environments/conexion';
import { AuthResponse } from '../pages/login/model/authinterface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(correos: string, pass: string) {

    return this.http.get<AuthResponse>(ServidorConexion.ip + 'orden/login?usuario=' + correos + '&password=' + pass)
      .pipe(
        tap(resp =>{
          if (resp.ok) {
            localStorage.setItem('token', resp.token!    );
          }
        }),
        map(resp => resp.ok),
        catchError(error => of(error.error.mensaje))
      )
  }

}
