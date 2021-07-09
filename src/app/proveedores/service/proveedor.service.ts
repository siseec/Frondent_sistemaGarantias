import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Proveedor } from '../model/proveedor-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  prov: Proveedor = null;
  constructor(private http: HttpClient) { }

  listarProveedor() {
    const url = environment.ip + 'usuario/listaProveedor';
    return this.http.get<Proveedor[]>(url);
  }

}
