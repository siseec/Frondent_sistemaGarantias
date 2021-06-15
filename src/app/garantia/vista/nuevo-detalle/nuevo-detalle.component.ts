import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Detalle } from '../../model/OrdenTrabajo';
import { OrdenTrabajoService } from '../../service/orden-trabajo.service';


@Component({
  selector: 'app-nuevo-detalle',
  templateUrl: './nuevo-detalle.component.html',
  styleUrls: ['./nuevo-detalle.component.css']
})
export class NuevoDetalleComponent {

  public previsualizacion: string;

  public ubicaciones: string[] = ['Oficina', 'Proveedor'];

  // @ViewChild('txtUbicacion') txtxUbicacion: ElementRef<HTMLInputElement>;
  // @ViewChild('txtDescripcion') txtDescripcion: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<NuevoDetalleComponent>,
    private fb: FormBuilder,
    private ordenService: OrdenTrabajoService,
    private sanitizer: DomSanitizer
  ) { }

  newPostForm: FormGroup = this.fb.group({
    Descripcion: ['', [Validators.required, Validators.minLength(3)]],
    Ubicacion: ['', [Validators.required, Validators.minLength(3)]],
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

  guardarDetalle() {
    const idOrden=this.ordenService.IDorden;
    const { Descripcion, Ubicacion } = this.newPostForm.value;
    console.log(this.newPostForm.value);
    //  const validacion = this.validarCampos();
    const detalle: Detalle = {
      "ubicacion": Ubicacion,
      "descripcion": Descripcion,
      "imagen": this.previsualizacion || null,
      "idOrdenTrabajo": idOrden
    };
    if (this.newPostForm.invalid) {
      Swal.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
    } else {
      // console.log('miki', this.previsualizacion);
      // console.log(detalle);

      this.ordenService.guardar(detalle).subscribe(data => {
        //console.log(data);
        if (data.codigo == 1) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          this.newPostForm.reset();
          this.dialogRef.close();
        } else {
          Swal.fire('Error', 'No se pudo ingresar', 'error')
        }
      });

    }
  }


  ValidarCampos(campo: string) {
    return this.newPostForm.controls[campo].errors
      && this.newPostForm.controls[campo].touched;
  }

}
