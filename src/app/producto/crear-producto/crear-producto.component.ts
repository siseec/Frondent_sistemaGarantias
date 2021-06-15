import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Categoria, Producto, Productos } from '../model/producto-Interface';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  listaCategorias:Categoria[]=[];
  @ViewChild('txtpcedula') txtpcedula!: ElementRef<HTMLInputElement>;

  formularioProducto: FormGroup = this.fb.group({
    serie: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    marca: ['', [Validators.required, Validators.minLength(3)]],
    modelo: ['', [Validators.required, Validators.minLength(3)]],
    categoria: ['', [Validators.required, Validators.minLength(3)]],
  });

  formularioProveedor: FormGroup = this.fb.group({
    cedula: ['', [Validators.required, Validators.minLength(3)]],
    nombres: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.minLength(3)]],
    direccion: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder,
              private  serviceProducto:ProductoService) { }

  ngOnInit(): void {
    this.serviceProducto.listaCategoria().subscribe(datos =>{
      //console.log(datos);
      this.listaCategorias=datos;
    });
  }

  crear() {


    if (this.formularioProducto.invalid) {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    } else {

      const { serie,nombre,marca,modelo,categoria}=this.formularioProducto.value;
      const {  cedula,nombres,apellidos,telefono,direccion,correo}=this.formularioProveedor.value;

      const prod:Productos={
        "producto": {
          "nombre":      nombre,
          "numeroSerie": serie,
          "marca":       marca,
          "modelo":      modelo,
          "categoria":   {
            "nombre":categoria
                          },
          "proveedor":   {
            "cedula": cedula,   
            "nombres":   nombres,
            "apellidos": apellidos,
            "telefono":  telefono,
            "direccion": direccion,
            "correo":    correo
                          }
      }
      };

     // console.log(prod);
      

      this.serviceProducto.crearProducto(prod).subscribe(
        data => {
          //console.log(data); 
          
          if (data.codigo == 1) {
            Swal.fire('Creacion Correcta', data.mensaje, 'success');
            this.formularioProducto.reset();
            this.formularioProveedor.reset();
          } else {
            Swal.fire('Error en la Creacion', 'Su Orden no fue Ingresada', 'warning')
          }
        });


     
    }
  }


  ValidarCamposProducto(campo: string) {
    return this.formularioProducto.controls[campo].errors
      && this.formularioProducto.controls[campo].touched;
  }

  ValidarCamposProveedor(campo: string) {
    return this.formularioProveedor.controls[campo].errors
      && this.formularioProveedor.controls[campo].touched;
  }

  buscarProveedor() {

    const valor = this.txtpcedula.nativeElement.value;
    if (valor != null || valor.trim() != '') {
      this.serviceProducto.buscarProveedor(valor).subscribe(data => {

        this.formularioProveedor.reset({
          cedula: data.cedula,
          nombres: data.nombres,
          apellidos: data.apellidos,
          telefono: data.telefono,
          direccion: data.direccion,
          correo: data.correo,
        });

      });
    } else {
      console.log('no hay valor')
    }

  }


}
