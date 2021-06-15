import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../../garantia/model/OrdenTrabajo';
import { ServicioClienteService } from '../service/servicio-cliente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailPattern } from '../../validator/Validaciones';

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

  
  constructor(private clienteService: ServicioClienteService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  verificarCedula( control: FormControl ) {
    const valor:string = control.value?.trim().toLowerCase();
    if (valor.length == 10) {
      let tercerDigito = parseInt(valor.substring(2, 3));
      if (tercerDigito < 6) {
        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(valor.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (valor.length - 1); i++) {
          digito = parseInt(valor.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
        }
        suma = Math.round(suma);
        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          return null;

        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          return null;
        } else {
          return {
            cedula: false
          }
        }
      } else {
        return {
          cedula: false
        }
      }
    } else {
      return {
        cedula: false
      }
    } 

   // return null;
}
miFormulario: FormGroup = this.fb.group({
nuevoFavorito: ['', [Validators.required,Validators.maxLength(10),this.verificarCedula], ],
correo : ['', [ Validators.required, Validators.pattern( emailPattern ) ], ],
});

  crearCliente() {
    const client: Cliente = {
      cedula: this.txtcedula.nativeElement.value,
      nombres: this.txtnombres.nativeElement.value,
      apellidos: this.txtapellidos.nativeElement.value,
      telefono: this.txttelefono.nativeElement.value,
      direccion: this.txtdireccion.nativeElement.value,
      correo: this.txtcorreo.nativeElement.value,
    };

    const validacion = this.validarCampos();

    console.log(client);
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

  campoNoValido( campo: string ) {
    // return this.miFormulario.get(campo)?.invalid
    //         && this.miFormulario.get(campo)?.touched;

            return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  limpiarCliente() {
    this.txtcedula.nativeElement.value = '';
    this.txtnombres.nativeElement.value = '';
    this.txtapellidos.nativeElement.value = '';
    this.txttelefono.nativeElement.value = '';
    this.txtdireccion.nativeElement.value = '';
    this.txtcorreo.nativeElement.value = '';
  }



  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('correo')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    return '';
  }


  cancelar(){
    this.limpiarCliente();
  }

  





}
