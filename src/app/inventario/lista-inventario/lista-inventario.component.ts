import { Component, OnInit } from '@angular/core';
import { Inventario } from '../../producto/model/producto-Interface';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements OnInit {

  constructor(private serviceInventario: InventarioService) { }

  listainventario: Inventario[] = [];

  ngOnInit(): void {
   this.getInventario();
  }

  getInventario() {
    this.serviceInventario.listarInventario().subscribe(
      data => {
        this.listainventario = data;
      }
    );
  }
}
