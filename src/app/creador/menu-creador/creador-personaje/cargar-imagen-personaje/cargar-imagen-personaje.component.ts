import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-imagen-personaje',
  templateUrl: './cargar-imagen-personaje.component.html',
  styleUrls: ['./cargar-imagen-personaje.component.css']
})
export class CargarImagenPersonajeComponent implements OnInit {
  
  idImagen:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
