import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo } from '../model/OrdenTrabajo';
import { ServidorConexion } from '../../../environments/conexion';
import { OrdenTrabajoService } from 'app/service/orden-trabajo.service';
import { data } from 'jquery';

@Component({
  selector: 'app-list-trabajo',
  templateUrl: './list-trabajo.component.html',
  styleUrls: ['./list-trabajo.component.css']
})
export class ListTrabajoComponent implements OnInit {

  OrdenTrabajos:OrdenTrabajo[]=[];
  public search: string = '';

  constructor(private http:HttpClient,private ordeServicio:OrdenTrabajoService) { }

  ngOnInit(): void {
    
//    this.http.get<OrdenTrabajo[]>('http://192.168.0.100:8080/sistema_garantias/rest/orden/listaOrden').subscribe(data => {
  this.http.get<OrdenTrabajo[]>(ServidorConexion.ip+'orden/listaOrden').subscribe(data => {  

      this.OrdenTrabajos=data;
      console.log(data);
    })

  }


  onSearchPokemon( search: string ) {
   // this.page = 0;
    this.search = search;
   // console.log(this.search)
  }

  obtenerOrden(orden:OrdenTrabajo){
    this.ordeServicio.orden=orden;
  }

}
