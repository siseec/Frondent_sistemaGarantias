import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { title } from 'process';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajoService } from '../../service/orden-trabajo.service';
import { Detalle } from 'app/garantia/model/OrdenTrabajo';

@Component({
  selector: 'app-nuevo-detalle',
  templateUrl: './nuevo-detalle.component.html',
  styleUrls: ['./nuevo-detalle.component.css']
})
export class NuevoDetalleComponent {

  public previsualizacion: string;
  public archivos: any = []
  public loading: boolean

  constructor(
    public dialogRef: MatDialogRef<NuevoDetalleComponent>,
    private fb: FormBuilder,
    private ordenService: OrdenTrabajoService,
    private sanitizer: DomSanitizer
  ) { }

  newPostForm: FormGroup = this.fb.group({
    Descripcion: new FormControl('', Validators.required),
    Ubicacion: new FormControl('', Validators.required),
  });

  cancelar(): void {
    this.dialogRef.close();
  }


  capturarFile(event): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });

  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  });

  guardarDetalle(){
    const { Descripcion, Ubicacion } = this.newPostForm.value;
    const detalle: Detalle = {
      "ubicacion": Ubicacion,
      "descripcion": Descripcion,
      "imagen": this.previsualizacion,
      "idOrdenTrabajo": "1"
    };
    this.ordenService.guardar(detalle).subscribe(data => {
      if (data.codigo == 1) {
        this.dialogRef.close();
      } else {
        
      }
    });
  }


}
