import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {MatDatepickerModule} from '@angular/material/datepicker';


import { OrdenTrabajo, Cliente, Proveedor } from '../model/OrdenTrabajo';
import { ServidorConexion } from 'environments/conexion';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  selected = 'option2';
  // fechas: Date = new Date();

  orden: OrdenTrabajo;
  cliente: Cliente;

  numeroOrden: string;
  nombreEquipo: string;
  numeroSerie: string;
  marca: string;
  modelo: string;
  observacionesEquipo: string;

  numeroFactura: string;
  fecha: Date;
  montoFactura: string;
  fechaFactura: Date;

  aniosGarantia: number = 1;
  //idUsuario=1;

  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;

  pcedula: string;
  pnombres: string;
  papellidos: string;
  ptelefono: string;
  pdireccion: string;
  pcorreo: string;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }





  addOrdenTrabajo() {


    const userPrueba: OrdenTrabajo =
    {
      "numeroOrden": this.numeroOrden,
      "nombreEquipo": this.nombreEquipo,
      "numeroSerie": this.numeroSerie,
      "marca": this.marca,
      "modelo": this.modelo,
      "observacionesEquipo": this.observacionesEquipo,
      "numeroFactura": this.numeroFactura,
      "fecha": this.fecha,
      "montoFactura": 3002983.0,
      "fechaFactura": this.fecha,
      "aniosGarantia": 1,
      "usuario": {
        "idUsuario": 1
      },
      "cliente": {
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos": this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo
      },
      "proveedor": {
        "cedula": this.pcedula,
        "nombres": this.pnombres,
        "apellidos": this.papellidos,
        "telefono": this.ptelefono,
        "direccion": this.pdireccion,
        "correo": this.pcorreo
      }
    };

    console.log("miki");

    if (this.nombreEquipo == null &&
      this.cedula == null &&
      this.nombres == null &&
      this.apellidos == null &&
      this.telefono == null &&
      this.direccion == null &&
      this.correo == null &&
      this.pcedula == null &&
      this.pnombres == null &&
      this.papellidos == null &&
      this.ptelefono == null &&
      this.pdireccion == null &&
      this.pcorreo == null) {
      console.log('no se envio');
    } else {

      //this.http.post('http://192.168.0.107:8080/sistema_garantias/rest/orden/guardar',
      this.http.post(ServidorConexion.ip + 'orden/guardar',
        userPrueba, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).subscribe(
        data => {
          console.log(data)
        }

      );
    }

  }

  buscarCliente() {

    this.http.get<Cliente>(ServidorConexion.ip + 'usuario/clienteCedula?cedula=' + this.cedula).subscribe(data => {
      // this.cedula = data.cedula;
      this.nombres = data.nombres;
      this.apellidos = data.apellidos;
      this.telefono = data.telefono;
      this.direccion = data.direccion;
      this.correo = data.correo;
      console.log(data)
    });
  }

  buscarProveedor() {
    this.http.get<Proveedor>(ServidorConexion.ip + 'usuario/proveeedorcedula?cedula=' + this.pcedula).subscribe(data => {
      //  this.pcedula = data.cedula;
      this.pnombres = data.nombres;
      this.papellidos = data.apellidos;
      this.ptelefono = data.telefono;
      this.pdireccion = data.direccion;
      this.pcorreo = data.correo;
    });
  }


}

