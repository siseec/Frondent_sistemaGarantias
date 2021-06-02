import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorConexion } from '../../../environments/conexion';
import { Cliente } from '../../garantia/model/OrdenTrabajo';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  cliente:Cliente=null;

  constructor(private http:HttpClient) { }

  listarCliente(){
    return this.http.get<Cliente[]>(ServidorConexion.ip+'usuario/listaCliente');
  }

  crearCliente(cliente:Cliente){
    return this.http.post<any>(ServidorConexion.ip+'usuario/guardarCliente',cliente);
  }

  actualizarCliente(cliente:Cliente){
    return this.http.put<any>(ServidorConexion.ip+'usuario/actualizarCliente',cliente);
  }

}
