import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Categoria, Producto, Productos } from '../model/producto-Interface';
import { ProductoService } from '../service/producto.service';
import { nombreApellidoPattern, emailPattern } from '../../validator/Validaciones';
import { ProveedorService } from '../../proveedores/service/proveedor.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  proveedor: Proveedor;
  listaProveedor: Proveedor[] = [];


  listaCategorias: Categoria[] = [{ "nombre": "TODOS" }];
  origen: String[] = ["Proveedor", "Bodega"];


  @ViewChild('txtpcedula') txtpcedula!: ElementRef<HTMLInputElement>;

  formularioProducto: FormGroup = this.fb.group({
    serie: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    marca: ['', [Validators.required, Validators.minLength(3)]],
    modelo: ['', [Validators.required, Validators.minLength(3)]],
    origen: ['', [Validators.required, Validators.minLength(3)]],
    categoria: ['', [Validators.required, Validators.minLength(3)]],
  });

  // formularioProveedor: FormGroup = this.fb.group({
  //   cedulap: ['', Validators.required],
  //  
  //   
  //   
  //  
  //  
  // });

  formularioProveedor: FormGroup = this.fb.group({
    cedulap: ['', [Validators.required, ]],
    nombresp: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(nombreApellidoPattern)]],
    apellidosp: ['', []],
    telefonop: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
    direccionp: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    correop: ['', [Validators.required, Validators.pattern(emailPattern)]],
  });

  constructor(private fb: FormBuilder,
    private serviceProducto: ProductoService,
    private serviceProveedor: ProveedorService) { }

  ngOnInit(): void {
    this.serviceProducto.listaCategoria().subscribe(datos => {
      this.listaCategorias = datos;
    });
    this.listarProveedor();

  }

  crear() {

    if (this.formularioProducto.invalid) {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error')
    } else {
      const { serie, nombre, marca, modelo,origen, categoria } = this.formularioProducto.value;
      const { cedula, nombres, apellidos, telefono, direccion, correo } = this.formularioProveedor.value;

      const prod: Productos = {
        "producto": {
          "nombre": nombre,
          "numeroSerie": serie,
          "marca": marca,
          "modelo": modelo,
          "origen": origen,
          "categoria": {
            "nombre": categoria
          },
          "proveedor": {
            "cedula": this.proveedor.cedula||cedula,
            "nombres": this.proveedor.nombres||nombres,
            "apellidos": this.proveedor.apellidos||apellidos,
            "telefono": this.proveedor.telefono||telefono,
            "direccion": this.proveedor.direccion||direccion,
            "correo": this.proveedor.correo||correo
          }
        }
      };
      
      this.serviceProducto.crearProducto(prod).subscribe(
        data => {

          if (data.codigo == 1) {
            Swal.fire('Creacion Correcta', data.mensaje, 'success');
            this.formularioProducto.reset();
            this.formularioProveedor.reset();
          } else {
            Swal.fire('Error en la Creacion', 'El Producto no fue Ingresado', 'warning')
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

  capturar() {
    this.formularioProveedor.reset({
      cedulap: this.proveedor.cedula,
      nombresp: this.proveedor.nombres,
      apellidosp: this.proveedor.apellidos || 'none',
      telefonop: this.proveedor.telefono,
      direccionp: this.proveedor.direccion,
      correop: this.proveedor.correo,
    });
   // console.log('miki');
    
    // console.log(this.formularioProducto.value);
    
  }

 
  listarProveedor() {
    this.serviceProveedor.listarProveedor().subscribe(data => {
      this.listaProveedor = data;
    }, (err) => {
      console.log(err);
    });
  }

}
