import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  cedula:string;
    nombres:string;
    apellidos:string;
    telefono:string;
    direccion:string;
    correo:string;
    contrasena:string; 
  constructor() { }

  ngOnInit(): void {
  }

}
