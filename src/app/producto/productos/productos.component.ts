import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaproducto: any[] = [];
  constructor(private productoservice: ProductoService) { }

  ngOnInit(): void {
    this.productoservice.listarProductosStock().subscribe(
      data => {
        this.listaproducto=data;
        console.log(data);
        
      });
  }

}
