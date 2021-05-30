import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuarioInterface';
import { UsuarioService } from '../service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  id: number;
  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;
  contrasena: string;
  

  usuarionuevo:Usuario=null;

  constructor(private userservice: UsuarioService) { }

  ngOnInit(): void {
   
    if (this.userservice.user != null) {

      this.id = this.userservice.user.idUsuario;
      this.cedula = this.userservice.user.cedula;
      this.nombres = this.userservice.user.nombres;
      this.apellidos = this.userservice.user.apellidos;
      this.telefono = this.userservice.user.telefono;
      this.direccion = this.userservice.user.direccion;
      this.correo = this.userservice.user.correo;
      this.contrasena=this.userservice.user.contrasena;
    } else {
      console.log(this.userservice.user)
    }
  }

  editarUsuario() {
    if (this.id == null) {
      Swal.fire('Error', 'miki error', 'error');
    } else {
      const usuario: Usuario = {
        "idUsuario":this.id,
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo,
        "contrasena": this.contrasena
      }
      console.log(usuario);

    }
  }


}
