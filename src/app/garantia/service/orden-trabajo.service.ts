import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo, Detalle, ProductoDanado, CambioProducto } from '../model/OrdenTrabajo';
import { ServidorConexion } from '../../../environments/conexion';
//import { Producto } from '../ src/app/producto/model/producto-Interface';
import { Productos, Producto } from '../../producto/model/producto-Interface';
//import { Producto } from 'src/app/producto/model/producto-Interface';


@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  orden: OrdenTrabajo = null;
  IDorden: number = null;
  ProductoDanado: ProductoDanado = null;

  constructor(private http: HttpClient) { }

  guardar(detalle: Detalle) {
    const urls = ServidorConexion.ip+'orden/guardarEstado';
    return this.http.post<any>(urls, detalle, {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  buscarProducto(serie:string){
   // http://localhost:8080/sistema_garantias/rest/inventario/productoSerie?numeroSerie={String}
   const urls = ServidorConexion.ip+'inventario/productoSerie?numeroSerie=' +serie;
    return this.http.get<any>(urls);
  }

  cambioEquipo(cambioProducto:CambioProducto){
    const urls = ServidorConexion.ip+'inventario/guardarDetalleCambio';

    return this.http.post<any>(urls,cambioProducto,{headers: 
      {'Content-Type': 'application/json; charset=UTF-8'}}
      );
  }

}
