import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(productos: Producto[], search: string = ''): Producto[] {

    if (search.length === 0 || search === 'TODOS') {
      return productos;
    }

    const listaProductos = productos.filter(producto =>
      producto.categoria.nombre.trim().toLowerCase().includes(search.trim().toLocaleLowerCase())
    );
    return listaProductos;


  }

}
