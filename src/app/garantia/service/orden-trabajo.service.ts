import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo, Detalle } from '../model/OrdenTrabajo';
import { ServidorConexion } from '../../../environments/conexion';


@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  orden: OrdenTrabajo = null;

  constructor(private http: HttpClient) { }

  guardar(detalle: Detalle) {
    const urls = 'http://192.168.0.105:8080/sistema_garantias/rest/orden/guardarEstado';
    return this.http.post<any>(urls, detalle, {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

}
