import { Component, OnInit } from '@angular/core';
import { Categoria, Producto } from '../model/producto-Interface';
import { ProductoService } from '../service/producto.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listaproducto: Producto[] = [];
  listaCategorias: Categoria[] = [];


  miFormulario: FormGroup = this.fb.group({
    categoria: ['', Validators.required],
  });


  constructor(private productoService: ProductoService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ListarProductoComponent>,
            ) { }

  ngOnInit(): void {

    this.productoService.listarProductos().subscribe(data => {
     // console.log(data)
      this.listaproducto = data;
    });


    this.productoService.listaCategoria().subscribe(datos => {
      //console.log(datos);
      this.listaCategorias = datos;
    });

    this.miFormulario.get('categoria')?.valueChanges
      .pipe(
        switchMap(cat => this.productoService.listarporCategoria(cat))
      )
      .subscribe(Categoriasproductos => {
        this.listaproducto = Categoriasproductos;
        console.log(Categoriasproductos);
      });



  }



  cancelar(): void {
    this.dialogRef.close();
  }

  obtenerOrden(orden: any) {
    this.dialogRef.close(orden);
    //console.log(orden);
    // const { categoria } = this.miFormulario.value;
    // console.log(categoria);
  }

}
