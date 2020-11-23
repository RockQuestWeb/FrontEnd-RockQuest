import { Component, OnInit } from '@angular/core';
import { GaleryService } from 'src/app/services/galery.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  filas:number;
  columnas: number;
  mapa: String[][];
  images;

  constructor(private galeryService: GaleryService) {
    this.filas = 5;
    this.columnas = 5;
    this.mapa = [];
    this.llenarMapa();
    this.images = [];
    this.loadImage();
  }

  ngOnInit(): void {
  }

  loadImage(){
    let data = this.galeryService.getImage();
    data.forEach(element => {
      this.images.push(element);
      console.log(this.images)
    });
  }

  llenarMapa(){
    this.mapa = [];
    for (let i = 0; i < this.filas; i++) {
      let tempArray = [];
      for (let j = 0; j < this.columnas; j++) {
        tempArray.push("https://img.freepik.com/vector-gratis/fondo-abstracto-blanco_23-2148549663.jpg?size=626&ext=jpg");
      }
      this.mapa.push(tempArray);
    }
  }

  ponerImagen(x:number, y:number, image: String){
    this.mapa[x][y] = image;
    console.log(x,y, this.mapa)
  }
}
