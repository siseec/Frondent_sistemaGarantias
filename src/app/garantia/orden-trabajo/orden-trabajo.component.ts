import { Component, OnInit } from '@angular/core';
import { OrdenTrabajo } from '../model/OrdenTrabajo';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css']
})
export class OrdenTrabajoComponent implements OnInit {


  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }

 
}
