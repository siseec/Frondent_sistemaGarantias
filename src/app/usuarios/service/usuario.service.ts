import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarioInterface';
import { HttpClient } from '@angular/common/http';
import { ServidorConexion } from '../../../environments/conexion';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  user:Usuario=null;
  constructor(private http:HttpClient) { }

  actualizarUsuario(userActualizar:Usuario){
  return this.http.put<any>(ServidorConexion.ip+'usuario/actualizarUsuario',userActualizar);
  }


}
