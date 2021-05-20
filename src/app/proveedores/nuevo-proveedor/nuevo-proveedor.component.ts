import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Proveedor } from '../model/proveedor-interface';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {

  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;

  constructor(private http:HttpClient,
              private route:Router  
    ) { }

  ngOnInit(): void {
  }

  guardarProveedor() {
    const prove: Proveedor = {
      "cedula":this.cedula,
      "nombres":this.nombres,
      "apellidos": this.apellidos,
      "telefono": this.telefono,
      "direccion": this.direccion,
      "correo": this.correo
    };

    console.log(prove)

    this.http.post('http://192.168.0.100:8080/sistema_garantias/rest/usuario/guardarProveedor',prove,{
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).subscribe(data => {
      console.log(data)
    });

    //this.route.navigate['#/proveedores'];



  }

}
