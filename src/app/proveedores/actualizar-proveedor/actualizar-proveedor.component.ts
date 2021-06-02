import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServidorConexion } from 'environments/conexion';
import Swal from 'sweetalert2';

import { ProveedorService } from '../service/proveedor.service';
import { Proveedor } from '../model/proveedor-interface';


@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {

  id: number;
  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;

  constructor(
    private http: HttpClient,
    private route: Router,
    private service: ProveedorService) { }

  ngOnInit(): void {
    if (this.service.prov != null) {
      this.id = this.service.prov.id;
      this.cedula = this.service.prov.cedula;
      this.nombres = this.service.prov.nombres;
      this.apellidos = this.service.prov.apellidos;
      this.telefono = this.service.prov.telefono;
      this.direccion = this.service.prov.direccion;
      this.correo = this.service.prov.correo;
    } else {
      
    }



  }

  actualizarProveedor() {
    if (this.id == undefined) {
      Swal.fire('Error', 'No se pudo Actualizar', 'error');
    } else {


      const prove: Proveedor = {
        "id": this.id,
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo
      };

      this.http.put<any>(ServidorConexion.ip + 'usuario/actualizarProveedor',
        prove,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        }).subscribe(
          data => {
            
            if (data.codigo == 1) {
              Swal.fire('Actualizacion Completa', data.mensaje, 'success')
                .then(result => {
                  if (result.value) {
                    this.route.navigate(['/proveedor/proveedores']);
                  }
                });

            } else {
              Swal.fire('Error', data.mensaje, 'error');
            }

          });
    }
  }

}
