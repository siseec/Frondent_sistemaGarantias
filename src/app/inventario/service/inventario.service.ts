import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Inventario } from '../../producto/model/producto-Interface';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http:HttpClient) { }

  listarInventario(){
    const url=environment.ip+'inventario/listaInventario';
    return this.http.get<Inventario[]>(url);
  }
}
