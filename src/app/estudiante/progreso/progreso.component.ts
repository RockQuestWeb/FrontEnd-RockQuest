import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {

  porcentajeVocabulario:number=80;
  porcentajeEscritura:number=50;
  porcentajeEscucha:number=60;

  constructor() { }

  ngOnInit(): void {
  }

}
