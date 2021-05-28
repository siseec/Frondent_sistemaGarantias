import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuarioInterface';
import { ServidorConexion } from 'environments/conexion';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  UsuarioLista: Usuario[] = [];

  public buscar: string = '';
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }


  listarUsuarios() {
    this.http.get<Usuario[]>(ServidorConexion.ip + 'usuario/listaUsuario').subscribe(
      data => {
        console.log(data);
        this.UsuarioLista = data;
      }
    );
  }




  ObetnerParametroPipe() {

    const valor = this.txtSearch.nativeElement.value;
    this.buscar = valor;
    if (valor.trim().length === 0) {
      return;
    }
    this.txtSearch.nativeElement.value = '';
  }



}
















