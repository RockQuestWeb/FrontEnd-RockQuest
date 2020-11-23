import { Component, OnInit } from '@angular/core';
import { GaleryService } from 'src/app/services/galery.service';

@Component({
  selector: 'app-contenedor-imagenes',
  templateUrl: './contenedor-imagenes.component.html',
  styleUrls: ['./contenedor-imagenes.component.css']
})
export class ContenedorImagenesComponent implements OnInit {

  imagenes;

  constructor(private galeryService: GaleryService) { 
    this.imagenes = [];
    this.loadImage();
  }

  ngOnInit(): void {
  }

  loadImage(){
    let data = this.galeryService.getImage();
    data.forEach(element => {
      this.imagenes.push(element);
      console.log(this.imagenes)
    });
  }

}
