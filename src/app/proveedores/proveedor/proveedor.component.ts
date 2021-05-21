import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServidorConexion } from 'environments/conexion';
import { Proveedor } from '../model/proveedor-interface';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
  
})
export class ProveedorComponent implements OnInit {

  listaProveedores:Proveedor[]=[];
  public search: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listarProveedor();
  }

  listarProveedor(){
    this.http.get<Proveedor[]>(ServidorConexion.ip+'usuario/listaProveedor').subscribe(data =>{
      console.log(data);
      this.listaProveedores=data;
    })
  }

  onSearchPokemon( search: string ) {
    // this.page = 0;
     this.search = search;
     console.log(this.search)
   }


}
