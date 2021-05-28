import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';


import { OrdenTrabajo, Cliente, Proveedor } from '../model/OrdenTrabajo';
import { ServidorConexion } from 'environments/conexion';
import { CrearDialogoComponent } from '../vista/crear-dialogo/crear-dialogo.component';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {


  // @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnumeroOrden') txtnumeroOrden!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnombreEquipo') txtnombreEquipo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnumeroSerie') txtnumeroSerie!: ElementRef<HTMLInputElement>;
  @ViewChild('txtmarca') txtmarca!: ElementRef<HTMLInputElement>;
  @ViewChild('txtmodelo') txtmodelo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtobservaciones') txtobservaciones!: ElementRef<HTMLInputElement>;

  @ViewChild('txtnumeroFactura') txtnumeroFactura!: ElementRef<HTMLInputElement>;
  @ViewChild('txtfecha') txtfecha!: ElementRef<HTMLInputElement>;
  @ViewChild('txtmontoFactura') txtmontoFactura!: ElementRef<HTMLInputElement>;
  @ViewChild('txtfechaFactura') txtfechaFactura!: ElementRef<HTMLInputElement>;

  @ViewChild('txtcedula') txtcedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnombres') txtnombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtapellidos') txtapellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txttelefono') txttelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('txtdireccion') txtdireccion!: ElementRef<HTMLInputElement>;
  @ViewChild('txtcorreo') txtcorreo!: ElementRef<HTMLInputElement>;

  @ViewChild('txtpcedula') txtpcedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpnombres') txtpnombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpapellidos') txtpapellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txtptelefono') txtptelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('txtpdireccion') txtpdireccion!: ElementRef<HTMLInputElement>;;
  @ViewChild('txtpcorreo') txtpcorreo!: ElementRef<HTMLInputElement>;
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
  montoFactura: number;
  fechaFactura: Date;

  aniosGarantia: number = 1;

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

  constructor(private http: HttpClient,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CrearDialogoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
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
      "montoFactura": this.montoFactura,
      "fechaFactura": this.fecha,
      "aniosGarantia": this.aniosGarantia,
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
    
    //console.log("miki");

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
      this.pcorreo == null ||

      this.nombreEquipo == '' ||
      this.cedula == '' ||
      this.nombres == '' ||
      this.apellidos == '' ||
      this.telefono == '' ||
      this.direccion == '' ||
      this.correo == '' ||
      this.pcedula == '' ||
      this.pnombres == '' ||
      this.papellidos == '' ||
      this.ptelefono == '' ||
      this.pdireccion == '' ||
      this.pcorreo == ''
      ) {
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
    this.limpiarCampos();

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

  limpiarCampos() {
    //this.txtSearch.nativeElement.value = '';

    this.txtnumeroOrden.nativeElement.value = '';
    this.txtnumeroOrden.nativeElement.value = '';
    this.txtnombreEquipo.nativeElement.value = '';
    this.txtnombreEquipo.nativeElement.value = '';
    this. txtnumeroSerie.nativeElement.value = '';
    this. txtnumeroSerie.nativeElement.value = '';
    this. txtmarca.nativeElement.value = '';
    this. txtmodelo.nativeElement.value = '';
    this. txtobservaciones.nativeElement.value = '';
    this. txtobservaciones.nativeElement.value = '';
    this. txtnumeroFactura.nativeElement.value = '';
    this.  txtnumeroFactura.nativeElement.value = '';
  //  this. txtfecha.nativeElement.value = '';
    this. txtmontoFactura.nativeElement.value = '';
    this. txtmontoFactura.nativeElement.value = '';
 //   this. txtfechaFactura.nativeElement.value = '';
   // this.  txtfechaFactura.nativeElement.value = '';
    this.  txtcedula.nativeElement.value = '';
    this.  txtnombres.nativeElement.value = '';
    this.  txtapellidos.nativeElement.value = '';
    this.  txttelefono.nativeElement.value = '';
    this.  txtdireccion.nativeElement.value = '';
    this.  txtcorreo.nativeElement.value = '';
    this.  txtpcedula.nativeElement.value = '';
    this.  txtpnombres.nativeElement.value = '';
    this.  txtpapellidos.nativeElement.value = '';
    this.  txtpapellidos.nativeElement.value = '';
    this.  txtptelefono.nativeElement.value = '';
    this.   txtpdireccion.nativeElement.value = '';
    this.   txtpdireccion.nativeElement.value = '';
    this.   txtpcorreo.nativeElement.value = '';
 

  }

}

