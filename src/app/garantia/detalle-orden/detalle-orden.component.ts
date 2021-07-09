import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { OrdenTrabajoService } from '../service/orden-trabajo.service';
import { OrdenTrabajo, Detalle, Ordenes, Cliente, ProductoDanado } from '../model/OrdenTrabajo';
//import { ServidorConexion } from '../../../environments/conexion';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NuevoDetalleComponent } from '../vista/nuevo-detalle/nuevo-detalle.component';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
//import { ServidorConexion } from '../../../environments/environment';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

   
  ordenDetalle: OrdenTrabajo;
  detalles: Detalle[] = [];
  cliente: Cliente;
  id: number;
  //myimage: Observable<any>;
  //public previsualizacion: string;

  //public archivos: Detalle[] = [];

  constructor(
    private router: Router,
    private ordeServicio: OrdenTrabajoService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.ordeServicio.orden !== null) {

      //console.log(this.ordeServicio.orden);
      
      this.id = this.ordeServicio.orden.idOrdenTrabajo;
      this.listarDetalles();
      this.obtenerOrden();
    }
    else {
    this.router.navigateByUrl('/orden/');
    }


  }

  listarDetalles() {
    
    this.http.get<any>(environment.ip + 'orden/listEstadoOrden?idordenTrabajo=' + this.id).subscribe(data => {
      // console.log(data);
      this.ordenDetalle = data.orden;
      this.cliente = data.orden.cliente;
      this.detalles = data.detalles;

      // this.detalles.forEach(element => {
      //   this.archivos.push(element);
      //   //console.log(this.archivos);
      // });
      //  this.myimage=data.detalles
     // this.Listarimagenes();
    });
  }

  // Listarimagenes(){
  //   this.detalles.forEach(element => {
  //     //console.log(element.descripcion);
  //   });
  // }

  // extraerBase64 = async (imagen: any) => new Promise((resolve, reject) => {
  //   try {
  //    // const unsafeImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(imagen);
  //     const reader = new FileReader();
  //     reader.readAsDataURL(imagen);
  //     reader.onload = () => {
  //       resolve({
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = error => {
  //       resolve({
  //         base: null
  //       });
  //     };

  //   } catch (e) {
  //     return null;
  //   }
  // });

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevoDetalleComponent, {
      height: '700px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

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


}
