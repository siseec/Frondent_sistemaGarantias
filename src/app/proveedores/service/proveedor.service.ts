import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor-interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  prov:Proveedor;
  constructor() { }
}
