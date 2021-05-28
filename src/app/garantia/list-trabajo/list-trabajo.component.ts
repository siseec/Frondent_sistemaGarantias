import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo } from '../model/OrdenTrabajo';
import { ServidorConexion } from '../../../environments/conexion';
import { OrdenTrabajoService } from '../service/orden-trabajo.service';



@Component({
  selector: 'app-list-trabajo',
  templateUrl: './list-trabajo.component.html',
  styleUrls: ['./list-trabajo.component.css']
})
export class ListTrabajoComponent implements OnInit {

  OrdenTrabajos: OrdenTrabajo[] = [];
  public search: string = '';


  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient, private ordeServicio: OrdenTrabajoService) { }

  ngOnInit(): void {

    this.http.get<OrdenTrabajo[]>(ServidorConexion.ip + 'orden/listaOrden').subscribe(data => {
      this.OrdenTrabajos = data;
      console.log(data);
    });

  }


  ObetnerParametroPipe() {

    const valor = this.txtSearch.nativeElement.value;
    this.search = valor;
    if (valor.trim().length === 0) {
      return;
    }
    this.txtSearch.nativeElement.value = '';
  }

  obtenerOrden(orden: OrdenTrabajo) {
    this.ordeServicio.orden = orden;
  }

}
