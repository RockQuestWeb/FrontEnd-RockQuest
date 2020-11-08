import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-imagenes',
  templateUrl: './contenedor-imagenes.component.html',
  styleUrls: ['./contenedor-imagenes.component.css']
})
export class ContenedorImagenesComponent implements OnInit {

  imagenes:String[];

  constructor() { 
    this.imagenes = new Array();
    this.imagenes.push("https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg")
  }

  ngOnInit(): void {
  }

}
