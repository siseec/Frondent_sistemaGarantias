import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { Ordenes, Detalle } from '../model/DetalleOrden-interface';
import { OrdenTrabajoService } from '../service/orden-trabajo.service';
import { OrdenTrabajo, Detalle, Ordenes, Cliente } from '../model/OrdenTrabajo';
import { ServidorConexion } from '../../../environments/conexion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  ordenDetalle: OrdenTrabajo;
  detalles: Detalle[] = [];
  cliente:Cliente;
  id: number;
  myimage: Observable<any>;

  constructor(private route: Router,
    private ordeServicio: OrdenTrabajoService,
    private http: HttpClient) { }

  ngOnInit(): void {

    if (this.ordeServicio.orden !== null || this.ordeServicio.orden !== undefined) {
      this.id = this.ordeServicio.orden.idOrdenTrabajo;
    }

    this.listarDetalles();
  }

  listarDetalles() {
    this.http.get<Ordenes>(ServidorConexion.ip + 'orden/listEstadoOrden?idordenTrabajo=' + this.id).subscribe(data => {
      // console.log(data);
      this.ordenDetalle = data.orden;
      this.cliente=data.orden.cliente;
      this.detalles = data.detalles;
    //  this.myimage=data.detalles
    });
  }


}
