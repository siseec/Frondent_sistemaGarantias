import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServidorConexion } from '../../../environments/conexion';
import { Categoria, Producto, Productos, Proveedor } from '../model/producto-Interface';
import { Observable } from 'rxjs';
//import { Proveedor } from 'src/app/proveedores/model/proveedor-interface';
//import { Proveedor } from 'src/app/garantia/model/OrdenTrabajo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  crearProducto(prod:Productos){
    const url=ServidorConexion.ip + 'inventario/guardarProductoInventario'
   return this.http.post<any>(url,prod,{headers: 
    {'Content-Type': 'application/json; charset=UTF-8'}}
    );
  }

  listaCategoria(){
    const url=ServidorConexion.ip+'inventario/listaCategoria';
    return this.http.get<Categoria[]>(url);
  }


  buscarProveedor(valor:String) {
      return this.http.get<Proveedor>(ServidorConexion.ip + 'usuario/proveeedorcedula?cedula=' + valor);
  }

  listarProductos(){
    return this.http.get<Producto[]>(ServidorConexion.ip+'inventario/listaProducto');
  }

  listarporCategoria(cat:string){
    //http://localhost:8080/sistema_garantias/rest/
    return this.http.get<Producto[]>(ServidorConexion.ip+'inventario/listaProductoCategoria?categoria='+cat);
  }
}
