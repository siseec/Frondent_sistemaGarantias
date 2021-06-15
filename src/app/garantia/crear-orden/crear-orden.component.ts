import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { OrdenTrabajo, Cliente, Proveedor } from '../model/OrdenTrabajo';


import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServidorConexion } from '../../../environments/conexion';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent {


  @ViewChild('txtnumeroOrden') txtnumeroOrden!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnombreEquipo') txtnombreEquipo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnumeroSerie') txtnumeroSerie!: ElementRef<HTMLInputElement>;
  @ViewChild('txtmarca') txtmarca!: ElementRef<HTMLInputElement>;
  @ViewChild('txtmodelo') txtmodelo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtobservaciones') txtobservaciones!: ElementRef<HTMLInputElement>;

  @ViewChild('txtnumeroFactura') txtnumeroFactura!: ElementRef<HTMLInputElement>;
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

  numeroOrden: string;
  nombreEquipo: string;
  numeroSerie: string;
  marca: string;
  modelo: string;
  observacionesEquipo: string;

  numeroFactura: string;
  //fecha: Date;
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
    private router: Router) { }



  addOrdenTrabajo() {
    const validacion = this.validarCampos();

    if (!validacion) {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    } else {
      const userPrueba: OrdenTrabajo =
      {
        "numeroOrden": this.numeroOrden,
        "nombreEquipo": this.nombreEquipo,
        "numeroSerie": this.numeroSerie,
        "marca": this.marca,
        "modelo": this.modelo,
        "observacionesEquipo": this.observacionesEquipo,
        "numeroFactura": this.numeroFactura,
        "fecha": this.fechaFactura,
        "montoFactura": this.montoFactura,
        "fechaFactura": this.fechaFactura,
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

      this.http.post<any>(ServidorConexion.ip + 'orden/guardar',
      userPrueba, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).subscribe(
        data => {
          console.log(data);
          if (data.codigo == 1) {
            this.limpiarCampos();
            Swal.fire('Creacion Correcta', 'Su Orden fue Ingresada', 'success')
          } else {
            Swal.fire('Error en la Creacion', data.mensaje, 'warning')
          }
        });

    }
   // this.limpiarCampos();

  }

  buscarCliente() {

    const valor = this.txtcedula.nativeElement.value;
    if (valor != null || valor.trim() != '') {
      this.http.get<Cliente>(ServidorConexion.ip + 'usuario/clienteCedula?cedula=' + valor).subscribe(data => {
        if (data != null) {
          // this.cedula = data.cedula;
          this.nombres = data.nombres;
          this.apellidos = data.apellidos;
          this.telefono = data.telefono;
          this.direccion = data.direccion;
          this.correo = data.correo;
        } else {
          Swal.fire('No existe el Cliente');
          this.limpiarCliente();
        }

      });
    } else {
      console.log('no hay valor')
    }
  }

  buscarProveedor() {

    const valor = this.txtpcedula.nativeElement.value;
    if (valor != null || valor.trim() != '') {
      this.http.get<Proveedor>(ServidorConexion.ip + 'usuario/proveeedorcedula?cedula=' + valor).subscribe(data => {
        console.log(data);
        if (data != null) {
          // this.pcedula = data.cedula;
          this.txtpnombres.nativeElement.value = data.nombres;
          this.txtpapellidos.nativeElement.value = data.apellidos;
          this.txtptelefono.nativeElement.value = data.telefono;
          this.txtpdireccion.nativeElement.value = data.direccion;
          this.txtpcorreo.nativeElement.value = data.correo;
        } else {
          Swal.fire('No existe el proveedor');
          this.limpiarProveedor();

        }
      });
    } else {
      console.log('no hay valor')
    }

  }

  limpiarCampos() {

    this.txtnumeroOrden.nativeElement.value = '';
    this.txtnombreEquipo.nativeElement.value = '';
    this.txtnumeroSerie.nativeElement.value = '';
    this.txtmarca.nativeElement.value = '';
    this.txtmodelo.nativeElement.value = '';
    this.txtobservaciones.nativeElement.value = '';
    this.txtnumeroFactura.nativeElement.value = '';
    this.txtmontoFactura.nativeElement.value = '';

    this.limpiarCliente();
    this.limpiarProveedor();
  }

  validarCampos() {
    if (
      this.txtcedula.nativeElement.value == '' ||
      this.txtcedula.nativeElement.value == undefined
      ||
      this.txtcorreo.nativeElement.value == '' ||
      this.txtcorreo.nativeElement.value == undefined
      ||
      this.txtnombres.nativeElement.value == '' ||
      this.txtnombres.nativeElement.value == undefined
      ||
      this.txtapellidos.nativeElement.value == '' ||
      this.txtapellidos.nativeElement.value == undefined
      ||
      this.txtdireccion.nativeElement.value == '' ||
      this.txtdireccion.nativeElement.value == undefined
      ||
      this.txttelefono.nativeElement.value == '' ||
      this.txttelefono.nativeElement.value == undefined
      ||
      this.txtnumeroOrden.nativeElement.value == '' ||
      this.txtnumeroOrden.nativeElement.value == undefined
      ||
      this.txtnombreEquipo.nativeElement.value == '' ||
      this.txtnombreEquipo.nativeElement.value == undefined
      ||
      this.txtnumeroSerie.nativeElement.value == '' ||
      this.txtnumeroSerie.nativeElement.value == undefined
      ||
      this.txtmarca.nativeElement.value == '' ||
      this.txtmarca.nativeElement.value == undefined
      ||
      this.txtmodelo.nativeElement.value == '' ||
      this.txtmodelo.nativeElement.value == undefined
      ||
      this.txtobservaciones.nativeElement.value == '' ||
      this.txtobservaciones.nativeElement.value == undefined
      ||
      this.txtnumeroFactura.nativeElement.value == '' ||
      this.txtnumeroFactura.nativeElement.value == undefined

      ||
      this.txtmontoFactura.nativeElement.value == '' ||
      this.txtmontoFactura.nativeElement.value == undefined
      ||
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
    this.limpiarCampos();
    this.router.navigate(['/orden/listar']);
  }

  limpiarCliente() {
    this.txtcedula.nativeElement.value = '';
    this.txtnombres.nativeElement.value = '';
    this.txtapellidos.nativeElement.value = '';
    this.txttelefono.nativeElement.value = '';
    this.txtdireccion.nativeElement.value = '';
    this.txtcorreo.nativeElement.value = '';
  }
  limpiarProveedor() {
    this.txtpcedula.nativeElement.value = '';
    this.txtpnombres.nativeElement.value = '';
    this.txtpapellidos.nativeElement.value = '';
    this.txtptelefono.nativeElement.value = '';
    this.txtpdireccion.nativeElement.value = '';
    this.txtpcorreo.nativeElement.value = '';
  }


  public validador;
  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
        }
        suma = Math.round(suma);
        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    this.validador = cedulaCorrecta;

  }

}

