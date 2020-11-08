import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imformacion-personaje',
  templateUrl: './imformacion-personaje.component.html',
  styleUrls: ['./imformacion-personaje.component.css']
})
export class ImformacionPersonajeComponent implements OnInit {

  listaImgPersonajes:string[]=['personaje 1','personaje 2','personaje 3','personaje 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
