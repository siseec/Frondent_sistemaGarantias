import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
//import { ServidorConexion } from 'environments/conexion';
import { Proveedor } from '../model/proveedor-interface';
import Swal from 'sweetalert2';
import { ServidorConexion } from '../../../environments/conexion';


@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent {

  @ViewChild('txtpcedula') txtpcedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpnombres') txtpnombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpapellidos') txtpapellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txtptelefono') txtptelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpdireccion') txtpdireccion!: ElementRef<HTMLInputElement>;;
  @ViewChild('txtpcorreo') txtpcorreo!: ElementRef<HTMLInputElement>;

  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;

  constructor(private http: HttpClient,
    private router: Router) { }


  guardarProveedor() {
    const validacion = this.validarCampos();
    if (validacion) {
      
      const prove: Proveedor = {
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo
      };

      console.log(prove)

      this.http.post<any>(ServidorConexion.ip + 'usuario/guardarProveedor', prove, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).subscribe(data => {
        console.log(data);
        if (data.codigo == 1) {
          this.limpiarProveedor();
          Swal.fire('Creacion Correcta', data.mensaje, 'success').
            then(result => {
              if (result.value) {
                this.router.navigate(['/proveedor/proveedores']);
              }
            });
        } else {
          Swal.fire('Error en la Creacion', data.mensaje, 'warning')
        }
      });

    } else {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    }
  }



  validarCampos() {
    if (
      this.txtpcedula.nativeElement.value == '' ||
      this.txtpcedula.nativeElement.value == undefined
      ||
      this.txtpnombres.nativeElement.value == '' ||
      this.txtpnombres.nativeElement.value == undefined
      ||
      this.txtpapellidos.nativeElement.value == '' ||
      this.txtpapellidos.nativeElement.value == undefined
      ||
      this.txtptelefono.nativeElement.value == '' ||
      this.txtptelefono.nativeElement.value == undefined
      ||
      this.txtpdireccion.nativeElement.value == '' ||
      this.txtpdireccion.nativeElement.value == undefined
      ||
      this.txtpcorreo.nativeElement.value == '' ||
      this.txtpcorreo.nativeElement.value == undefined

    ) {
      return false;
    } else {
      return true;
    }

  }

  cancelar() {
    this.limpiarProveedor();
    this.router.navigate(['/proveedor/proveedores']);
  }

  limpiarProveedor() {
    this.txtpcedula.nativeElement.value = '';
    this.txtpnombres.nativeElement.value = '';
    this.txtpapellidos.nativeElement.value = '';
    this.txtptelefono.nativeElement.value = '';
    this.txtpdireccion.nativeElement.value = '';
    this.txtpcorreo.nativeElement.value = '';
  }

}
