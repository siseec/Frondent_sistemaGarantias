import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { OrdenTrabajoService } from '../service/orden-trabajo.service';
import { OrdenTrabajo, Detalle, Ordenes, Cliente, ProductoDanado } from '../model/OrdenTrabajo';
import * as printJS from 'print-js';
import { MatDialog } from '@angular/material/dialog';
import { NuevoDetalleComponent } from '../vista/nuevo-detalle/nuevo-detalle.component';
import { environment } from '../../../environments/environment';
import { PrincipalComponent } from '../../inicio/principal/principal.component';
import { EntregaProductoComponent } from '../vista/entrega-producto/entrega-producto.component';


@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  @ViewChild(PrincipalComponent) hijo: PrincipalComponent;

   
  ordenDetalle: OrdenTrabajo;
  detalles: Detalle[] = [];
  cliente: Cliente;
  id: number;
  mensaje:string='Agregar nuevo Detalle';
  disablednuevoDetalle = false;
  disabledEntregarProducto = false;
  estado:string;

  constructor(
    private router: Router,
    private ordeServicio: OrdenTrabajoService,
    private http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.ordeServicio.orden !== null) {
      this.id = this.ordeServicio.orden.idOrdenTrabajo;
     // console.log(this.ordeServicio.orden);
      
      this.deshabilitarEntregarProducto(this.ordeServicio.orden.estado);
      this.deshabilitarNuevoDetalle(this.ordeServicio.orden.estado);
      this.listarDetalles();
      this.obtenerOrden();
    }
    else {
    this.router.navigateByUrl('/orden/');
    }


  }

  listarDetalles() {
    this.http.get<any>(environment.ip + 'orden/listEstadoOrden?idordenTrabajo=' + this.id).subscribe(data => {
    
      
      this.ordenDetalle = data.orden;
      this.cliente = data.orden.cliente;
      this.detalles = data.detalles;
      // console.log(this.cliente);
    });
    
    
  }

  nuevoDetalle(): void {
    const dialogRef = this.dialog.open(NuevoDetalleComponent, {
      height: '700px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }


  EntregarProducto(): void {
    const dialogRef = this.dialog.open(EntregaProductoComponent, {
      height: '700px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }


  deshabilitarNuevoDetalle(estado:string){
    this.estado=estado;
    if (estado ==='Garantia negado' || estado ==='Finalizo' ) {
      this.mensaje='No se Puede Agregar nuevos Detalles';
      return this.disablednuevoDetalle=true;
    };
  }

  deshabilitarEntregarProducto(estado:string){
    this.estado=estado;
    if (estado ==='Garantia negado' || estado ==='En proceso'  || estado ==='Entregado' ) {
      this.mensaje='No se Puede Agregar nuevos Detalles';
      return this.disabledEntregarProducto=true;
    };
  }



  obtenerOrden() {

    const producto={ 
      idOrdenTrabajo:this.ordeServicio.orden.idOrdenTrabajo,
      nombreEquipo:this.ordeServicio.orden.nombreEquipo,
      numeroSerie:this.ordeServicio.orden.numeroSerie,
      marca:this.ordeServicio.orden.marca,
      modelo:this.ordeServicio.orden.modelo
    }
    this.ordeServicio.ProductoDanado = producto;
  }


  imprimir() {
    this.hijo.imprimirDetalle();
  }

}
