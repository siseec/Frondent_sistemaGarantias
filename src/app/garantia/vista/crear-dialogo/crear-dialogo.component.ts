import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-dialogo',
  templateUrl: './crear-dialogo.component.html',
  styleUrls: ['./crear-dialogo.component.css']
})
export class CrearDialogoComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CrearDialogoComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
