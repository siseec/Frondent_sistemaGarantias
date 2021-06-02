import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServidorConexion } from '../../../environments/conexion';
import { AuthResponse } from '../pages/login/model/authinterface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(correos: string, pass: string) {
    return this.http.get<AuthResponse>(ServidorConexion.ip + 'orden/login?usuario=' + correos + '&password=' + pass)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(error => of(error.error.mensaje))
      )
  }

  validarToken(): Observable<boolean> {
    const url = `${ServidorConexion.ip}orden/validarToken?x-token=`;
    const token = localStorage.getItem('token') || "";
   
    //console.log(token);
   // const headers = new HttpHeaders()
    //  .set('x-token', localStorage.getItem('token') || "")
    return this.http.get<AuthResponse>(url+token)
      .pipe(
        map(resp => {
          return resp.ok
        }), catchError(error => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }


}
