import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-estudiante',
  templateUrl: './datos-estudiante.component.html',
  styleUrls: ['./datos-estudiante.component.css']
})
export class DatosEstudianteComponent implements OnInit {

  nombre:string='Freddy Patarroyo';
  tiempoJuego:string='2 horas';
  tikets:number=5;

  constructor() { }

  ngOnInit(): void {
  }

}
