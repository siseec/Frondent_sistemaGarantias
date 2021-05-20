import { Pipe, PipeTransform } from '@angular/core';
import { Proveedor } from '../model/proveedor-interface';

@Pipe({
  name: 'filtrado'
})
export class FiltradoPipe implements PipeTransform {

  Proveedores: Proveedor[] = [];

  transform(lista1: Proveedor[], search: string): Proveedor[] {
    if (search.length === 0) {
 return lista1;
    }
   

    for (const prov of lista1) {

      if(prov.cedula ==search){
        this.Proveedores.push(prov);
      }

    }

    return this.Proveedores;
  }
}
