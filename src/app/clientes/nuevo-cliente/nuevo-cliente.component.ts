import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from 'app/garantia/model/OrdenTrabajo';
import { ServicioClienteService } from '../service/servicio-cliente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {


  @ViewChild('txtcedula') txtcedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtnombres') txtnombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtapellidos') txtapellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txttelefono') txttelefono!: ElementRef<HTMLInputElement>;
  @ViewChild('txtdireccion') txtdireccion!: ElementRef<HTMLInputElement>;
  @ViewChild('txtcorreo') txtcorreo!: ElementRef<HTMLInputElement>;

  
  constructor(private clienteService: ServicioClienteService) { }

  ngOnInit(): void {
  }


  crearCliente() {
    const client: Cliente = {
      cedula: this.txtcedula.nativeElement.value,
      nombres: this.txtcedula.nativeElement.value,
      apellidos: this.txtcedula.nativeElement.value,
      telefono: this.txtcedula.nativeElement.value,
      direccion: this.txtcedula.nativeElement.value,
      correo: this.txtcedula.nativeElement.value,
    };

    const validacion = this.validarCampos();

    if (!validacion) {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    } else {

    this.clienteService.crearCliente(client).subscribe(
      data => {

        if (data.codigo == 1) {
          this.limpiarCliente();
          Swal.fire('Ingreso Correcto', 'Cliente Ingresado Correctamente', 'success')
        } else {
          console.log(data);
          Swal.fire('Error en el Ingreso', data.mensaje, 'warning')
        }
      });
    }
   
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
      
    ) {
      return false;
    } else {
      return true;
    }

  }



  limpiarCliente() {
    this.txtcedula.nativeElement.value = '';
    this.txtnombres.nativeElement.value = '';
    this.txtapellidos.nativeElement.value = '';
    this.txttelefono.nativeElement.value = '';
    this.txtdireccion.nativeElement.value = '';
    this.txtcorreo.nativeElement.value = '';
  }

  cancelar(){
    this.limpiarCliente();
  }

}
