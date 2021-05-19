import { Component, Input, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../model/OrdenTrabajo';

@Component({
  selector: 'app-actualizar-orden',
  templateUrl: './actualizar-orden.component.html',
  styleUrls: ['./actualizar-orden.component.css']
})
export class ActualizarOrdenComponent implements OnInit {


  @Input()Orden:OrdenTrabajo;

  
  constructor() { }

  ngOnInit(): void {
  }

}
