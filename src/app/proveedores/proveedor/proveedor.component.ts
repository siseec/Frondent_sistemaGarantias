import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { ServidorConexion } from 'environments/conexion';
import { Proveedor } from '../model/proveedor-interface';

import { ProveedorService } from '../service/proveedor.service';
import { catchError } from 'rxjs/operators';
import { ServidorConexion } from '../../../environments/conexion';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']

})
export class ProveedorComponent implements OnInit {

  listaProveedores: Proveedor[] = [];
  public search: string = '';

  constructor(private http: HttpClient, private serviceProveedor: ProveedorService) { }

  ngOnInit(): void {
    this.listarProveedor();
  }

  listarProveedor() {
    this.http.get<Proveedor[]>(ServidorConexion.ip + 'usuario/listaProveedor').subscribe(data => {
      this.listaProveedores = data;
    }, error => console.log('oops', error)
    );
  }

  filtroProveedor(search: string) {
    this.search = search;
  }

  getProveedor(proveedorRecuperado: Proveedor) {
    this.serviceProveedor.prov = proveedorRecuperado;
  }


}
