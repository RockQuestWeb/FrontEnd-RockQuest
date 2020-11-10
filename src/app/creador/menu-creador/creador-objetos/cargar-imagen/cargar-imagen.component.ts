import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-imagen',
  templateUrl: './cargar-imagen.component.html',
  styleUrls: ['./cargar-imagen.component.css']
})
export class CargarImagenComponent implements OnInit {

  idImagen:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
