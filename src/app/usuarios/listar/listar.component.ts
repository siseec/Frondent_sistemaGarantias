import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuarioInterface';
import { ServidorConexion } from 'environments/conexion';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

UsuarioLista:Usuario[]=[];

public buscar: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

 
  listarUsuarios(){
this.http.get<Usuario[]>(ServidorConexion.ip+'usuario/listaUsuario').subscribe(
  data=>{
    console.log(data);
    this.UsuarioLista=data;
  }
);
  }


  onSearchPokemon( search: string ) {
    // this.page = 0;
     this.buscar = search;
     console.log(this.buscar)
   }



}
















