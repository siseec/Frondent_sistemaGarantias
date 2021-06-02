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

  }

}
