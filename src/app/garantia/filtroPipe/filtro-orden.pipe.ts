import { Pipe, PipeTransform } from '@angular/core';
import { OrdenTrabajo } from '../model/OrdenTrabajo';

@Pipe({
  name: 'filtroOrden'
})
export class FiltroOrdenPipe implements PipeTransform {

  resultadoOrdenTrabajos: OrdenTrabajo[] = [];

  transform(ordenes: OrdenTrabajo[], search: string = ''): OrdenTrabajo[] {

    if (search.length === 0) {
      return ordenes;
    }
    // const filteredPokemons = ordenes.filter( orden => orden.numeroSerie.includes( search ));
    //return filteredPokemons;
    for (const ord of ordenes) {
      
      if (ord.numeroSerie.toLowerCase() == search || ord.cliente.nombres.toLowerCase() == search||ord.nombreEquipo.toLowerCase() == search) {
        this.resultadoOrdenTrabajos.push(ord);
      }
    };
    return this.resultadoOrdenTrabajos;
    
  }

}
