import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-siseec',
  templateUrl: './menu-siseec.component.html',
  styleUrls: ['./menu-siseec.component.css']
})
export class MenuSISEECComponent implements OnInit {

  fecha=new Date();

  constructor() {
   
   }

  ngOnInit(): void {
    console.log(this.fecha);
  }

}
