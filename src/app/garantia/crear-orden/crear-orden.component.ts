import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { OrdenTrabajo } from '../model/OrdenTrabajo';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  selected = 'option2';
  fechas: Date = new Date();

  orden: OrdenTrabajo;
  numeroOrden: string;
  nombreEquipo: string;
  numeroSerie: string;
  marca: string;
  modelo: string;
  observacionesEquipo: string;

  numeroFactura: string;
  fecha = this.fechas;
  montoFactura: string;
  fechaFactura = this.fechas;

  aniosGarantia: number=1;
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

    //  console.log(this.orden);
    // const user: OrdenTrabajo =  {
    //   "numeroOrden": "003934",
    //   "nombreEquipo": "HP",
    //   "numeroSerie": "IOE9380NN",
    //   "marca": "Apple",
    //   "modelo": "2018",
    //   "observacionesEquipo": "SIN OBSERVACIONES",
    //   "numeroFactura": "000-88982-22",
    //   "fecha": this.fecha,
    //   "montoFactura": 3002983.0,
    //   "fechaFactura": this.fecha,
    //   "aniosGarantia": 1,
    //   "usuario": {
    //     "idUsuario": 1
    //   },
    //   "cliente": {
    //     "cedula": "0302603493",
    //     "nombres": "wilmer",
    //     "apellidos": "camas",
    //     "telefono": "093939333",
    //     "direccion": "Giron",
    //     "correo": "xavier94xr8@gmail.com"
    //   },
    //   "proveedor": {
    //     "cedula": "0105176127",
    //     "nombres": "Apple",
    //     "apellidos": "BFBV",
    //     "telefono": "093939333",
    //     "direccion": "Giron",
    //     "correo": "093939333"
    //   }
    // };

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

    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-type': 'application/json',
    //   'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    //   'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    // });
    // let options = {
    //   headers: headers,
    //   body:user
    // }

    /* {headers: {
      "Access-Control-Allow-Origin":"*",
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }}

     {
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      mode: 'no-cors'
    }
    */
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

      this.http.post('http://192.168.0.107:8080/sistema_garantias/rest/orden/guardar',
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

}

