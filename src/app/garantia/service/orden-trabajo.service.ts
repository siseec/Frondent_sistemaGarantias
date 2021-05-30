import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo } from '../model/OrdenTrabajo';


@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  orden:OrdenTrabajo=null;

  constructor() { }

  
  
}
