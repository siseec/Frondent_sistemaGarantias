import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrdenTrabajoService } from '../service/orden-trabajo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CambioProducto } from '../model/OrdenTrabajo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListarProductoComponent } from '../../producto/listar-producto/listar-producto.component';

@Component({
  selector: 'app-cambio-producto',
  templateUrl: './cambio-producto.component.html',
  styleUrls: ['./cambio-producto.component.css']
})
export class CambioProductoComponent implements OnInit {

  @ViewChild('numeroserie') numeroserie!: ElementRef<HTMLInputElement>;
  idOrdenTrabajo:number;

  formularioProducto:FormGroup = this.fb.group({
    serie: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    marca: ['', [Validators.required, Validators.minLength(3)]],
    modelo: ['', [Validators.required, Validators.minLength(3)]],
  });

  formularioProductoDanado:FormGroup = this.fb.group({
    seried: ['', [Validators.required, Validators.minLength(3)]],
    nombred: ['', [Validators.required, Validators.minLength(3)]],
    marcad: ['', [Validators.required, Validators.minLength(3)]],
    modelod: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private ordeServicio: OrdenTrabajoService,
              private fb:FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.ordeServicio.ProductoDanado);

   if (this.ordeServicio.ProductoDanado ==null) {
     return;
   }
   this.idOrdenTrabajo=this.ordeServicio.ProductoDanado.idOrdenTrabajo;
   this.formularioProducto.reset({
    serie: this.ordeServicio.ProductoDanado.numeroSerie || '',
    nombre: this.ordeServicio.ProductoDanado.nombreEquipo||'',
    marca: this.ordeServicio.ProductoDanado.marca||'',
    modelo: this.ordeServicio.ProductoDanado.modelo||'',
  });
  }


cambioEquipo(){
  const { seried}= this.formularioProductoDanado.value;
  console.log
  const cambio:CambioProducto={
    "descripcion":"se cambio por otra computadora",
    "ordenTrabajo": {
        "idOrdenTrabajo": this.idOrdenTrabajo
    },
    "producto":   {
        "numeroSerie": seried
    }
  };
  this.ordeServicio.cambioEquipo(cambio).subscribe(data =>{
    console.log(data);
  }
  )
  
}


  buscarProducto(){
    this.ordeServicio.buscarProducto(this.numeroserie.nativeElement.value).subscribe(
      data =>{
        console.log(data);
        if (data ==null) {
          return;
        }
        this.formularioProductoDanado.reset({
          seried: data.numeroSerie || '',
          nombred: data.nombre||'',
          marcad: data.marca||'',
          modelod: data.modelo||'',
        });
    });
  }


  openDialog(): void {
    // const dialogRef = this.dialog.open(ListarProductoComponent, {
    //   height: '700px',
    //   width: '700px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });

    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.height= "800px"
    //dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(ListarProductoComponent, dialogConfig).afterClosed().subscribe(res => {
    //  this.updateGrandTotal();
    });
  }

}
