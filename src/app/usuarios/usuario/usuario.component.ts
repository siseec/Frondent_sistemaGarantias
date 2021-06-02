import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServidorConexion } from 'environments/conexion';
import { Usuario } from '../model/usuarioInterface';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;
  contrasena: string;

  @ViewChild('txtcedula') txtcedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnombres') txtnombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtapellidos') txtapellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txttelefono') txttelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('txtdireccion') txtdireccion!: ElementRef<HTMLInputElement>;
  @ViewChild('txtcorreo') txtcorreo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtcontrasena') txtcontrasena!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient,
    private router: Router) { }



  agregarusuario() {
    const validacion = this.validarCamposCliente();
    if (validacion) {

      const usuarioEnvio: Usuario = {
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo,
        "contrasena": this.contrasena
      };

      this.http.post<any>(ServidorConexion.ip + 'usuario/guardarUsuario', usuarioEnvio, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).subscribe(data => {
        if (data.codigo == 1) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Creacion Correcta',
            showConfirmButton: false,
            timer: 1500
          });

          this.router.navigate(['/usuario/listar']);

        } else {
          Swal.fire('Error en la Creacion', data.mensaje, 'warning');
          this.limpiarCliente();
        }
      });

    } else {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    }

  }


  limpiarCliente() {
    this.txtcedula.nativeElement.value = '';
    this.txtnombres.nativeElement.value = '';
    this.txtapellidos.nativeElement.value = '';
    this.txttelefono.nativeElement.value = '';
    this.txtdireccion.nativeElement.value = '';
    this.txtcorreo.nativeElement.value = '';
    this.txtcontrasena.nativeElement.value = '';

  }

  validarCamposCliente() {
    if (this.txtcedula.nativeElement.value == '' ||
      this.txtcedula.nativeElement.value == undefined ||
      this.txtnombres.nativeElement.value == '' ||
      this.txtnombres.nativeElement.value == undefined ||
      this.txtapellidos.nativeElement.value == '' ||
      this.txtapellidos.nativeElement.value == undefined ||
      this.txttelefono.nativeElement.value == '' ||
      this.txttelefono.nativeElement.value == undefined ||
      this.txtdireccion.nativeElement.value == '' ||
      this.txtdireccion.nativeElement.value == undefined ||
      this.txtcorreo.nativeElement.value == '' ||
      this.txtcorreo.nativeElement.value == undefined ||
      this.txtcontrasena.nativeElement.value == '' ||
      this.txtcontrasena.nativeElement.value == undefined) {
      return false;
    } else {
      return true;
    }
  }

  cancelar() {
    this.limpiarCliente();
    this.router.navigate(['/usuario/listar']);
  }

}



















