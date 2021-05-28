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
    const filteredOrdenes = ordenes.filter( orden => orden.nombreEquipo.trim().toLowerCase().includes( search.trim().toLocaleLowerCase())
                                            || orden.numeroSerie.trim().toLowerCase().includes( search.trim().toLocaleLowerCase())
                                            || orden.cliente.nombres.trim().toLowerCase().includes( search.trim().toLocaleLowerCase())
                                            );
    return filteredOrdenes;

    // for (const ord of ordenes) {
      
    //   if (ord.numeroSerie.trim().toLowerCase() == search.trim().toLowerCase() || 
    //       ord.cliente.nombres.trim().toLowerCase() == search.trim().toLowerCase()||
    //       ord.nombreEquipo.trim().toLowerCase() == search.trim().toLowerCase()) {
    //     this.resultadoOrdenTrabajos.unshift(ord);
    //   }
    // };
   
  // return [...this.resultadoOrdenTrabajos];
   // this.resultadoOrdenTrabajos= [];
    
  }

}
