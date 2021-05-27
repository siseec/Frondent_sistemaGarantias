import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenTrabajo } from '../garantia/model/OrdenTrabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  orden:OrdenTrabajo=null;

  constructor(private http:HttpClient) { }

  
  
}
