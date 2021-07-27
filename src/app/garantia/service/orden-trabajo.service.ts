import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Cliente, Detalle, EntregaProducto, HistorialEstado, OrdenTrabajo, ProductoDanado } from '../../model/TODO';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  orden: OrdenTrabajo = null;
  IDorden: number = null;
  ProductoDanado: ProductoDanado = null;

  constructor(private http: HttpClient) { }

  guardar(detalle: Detalle) {
    const urls = environment.ip + 'orden/guardarEstado';
    return this.http.post<any>(urls, detalle, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
  }

  buscarProducto(serie: string) {
    // http://localhost:8080/sistema_garantias/rest/inventario/productoSerie?numeroSerie={String}
    const urls = environment.ip + 'inventario/productoSerie?numeroSerie=' + serie;
    return this.http.get<any>(urls);
  }

  cambioEquipo(cambioProducto: any) {
    const urls = environment.ip + 'inventario/guardarCambioOrden';

    return this.http.post<any>(urls, cambioProducto, {
      headers:
        { 'Content-Type': 'application/json; charset=UTF-8' }
    }
    );
  }

  listaEstadosHistoria() {
    const urls = environment.ip + 'orden/listaHistorialEstado';
    return this.http.get<HistorialEstado[]>(urls);
  }

  listarOrden() {
    const urls = environment.ip + 'orden/listaOrden';
    return this.http.get<OrdenTrabajo[]>(urls);
  }

  buscarCliente(cedula: string) {
    // const { cedula } = this.formularioCliente.value;
    const urls = environment.ip + 'usuario/clienteCedula?cedula=' + cedula;
    return this.http.get<Cliente>(urls);
    //  this.http.get<OrdenTrabajo[]>(urls); 
  }

  entregarProducto(cambio: EntregaProducto) {
    const urls = environment.ip + 'orden/actualizarEstadoEntregado';

    return this.http.post<any>(urls, cambio, {
      headers:
        { 'Content-Type': 'application/json; charset=UTF-8' }
    }
    );

  }
}
