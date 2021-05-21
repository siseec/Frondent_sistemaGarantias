import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../service/orden-trabajo.service';
import { OrdenTrabajo } from '../model/OrdenTrabajo';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  ordenDetalle: OrdenTrabajo;

  estadoDetalle: boolean = false;
  //listaOrdenTrabajos:OrdenTrabajo[];
  constructor(private ordeServicio: OrdenTrabajoService) { }

  ngOnInit(): void {

    if (this.ordeServicio.orden != null) {
      this.ordenDetalle = this.ordeServicio.orden;
      this.estadoDetalle = true;
    } else {
      this.estadoDetalle = false;

    }
    // this.listaOrdenTrabajos.push(this.ordeServicio.orden);
    console.log(this.ordenDetalle);
  }


}
