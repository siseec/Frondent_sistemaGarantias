import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServidorConexion } from 'environments/conexion';
import { Usuario } from '../model/usuarioInterface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   cedula:string;
    nombres:string;
    apellidos:string;
    telefono:string;
    direccion:string;
    correo:string;
    contrasena:string; 

//Usuarioenvio:Usuario;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  agregarusuario(){
   
    const usuarioEnvio:Usuario={
        "cedula": this.cedula,
        "nombres": this.nombres,
        "apellidos":this.apellidos,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo,
        "contrasena":this.contrasena
    }
    console.log(usuarioEnvio)
    this.http.post(ServidorConexion.ip+'usuario/guardarUsuario',usuarioEnvio, {
      headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
       }} ).subscribe(
    data => {
      console.log(data)
    }
  );
  }

}

/*
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
 */

















