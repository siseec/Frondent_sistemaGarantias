import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo, Detalle, ProductoDanado, CambioProducto, HistorialEstado } from '../model/OrdenTrabajo';

//import { Producto } from '../ src/app/producto/model/producto-Interface';
import { Productos, Producto } from '../../producto/model/producto-Interface';
import { environment } from '../../../environments/environment';
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
    const urls = environment.ip+'orden/guardarEstado';
    return this.http.post<any>(urls, detalle, {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  buscarProducto(serie:string){
   // http://localhost:8080/sistema_garantias/rest/inventario/productoSerie?numeroSerie={String}
   const urls = environment.ip+'inventario/productoSerie?numeroSerie=' +serie;
    return this.http.get<any>(urls);
  }

  cambioEquipo(cambioProducto:any){
    const urls = environment.ip+'inventario/guardarCambioOrden';

    return this.http.post<any>(urls,cambioProducto,{headers: 
      {'Content-Type': 'application/json; charset=UTF-8'}}
      );
  }

  listaEstadosHistoria(){
    const urls = environment.ip+'orden/listaHistorialEstado';
    return this.http.get<HistorialEstado[]>(urls);
  }

}
