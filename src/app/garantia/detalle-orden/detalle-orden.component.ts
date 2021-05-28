import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../service/orden-trabajo.service';
import { OrdenTrabajo } from '../model/OrdenTrabajo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  ordenDetalle: OrdenTrabajo=null;

  estadoDetalle: boolean = false;
  //listaOrdenTrabajos:OrdenTrabajo[];
  constructor(private route:Router,private ordeServicio: OrdenTrabajoService) { }

  ngOnInit(): void {

    if (this.ordeServicio.orden !== null || this.ordeServicio.orden !==  undefined || this.ordeServicio.orden.cliente !==  undefined ) {
      this.ordenDetalle = this.ordeServicio.orden;
      this.estadoDetalle = true;
   
    } else {
      this.estadoDetalle = false;
      this.route.navigateByUrl['/orden/listar'];
    }
    // this.listaOrdenTrabajos.push(this.ordeServicio.orden);
    console.log(this.ordenDetalle);
  }


}
