import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServidorConexion } from 'environments/conexion';
import { Usuario } from '../model/usuarioInterface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   cedula:string;
    nombres:string;
    apellidos:string;
    telefono:string;
    direccion:string;
    correo:string;
    contrasena:string; 

//Usuarioenvio:Usuario;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  agregarusuario(){
   
    const usuarioEnvio:Usuario={
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos":this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo,
        "contrasena":this.contrasena
    }
 
    this.http.post(ServidorConexion.ip+'usuario/guardarUsuario',usuarioEnvio, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
       }} ).subscribe(
    data => {
      console.log(data)
    }
  );
  }

}



















