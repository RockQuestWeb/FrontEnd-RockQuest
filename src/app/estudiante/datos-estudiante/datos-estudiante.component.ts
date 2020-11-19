import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datos-estudiante',
  templateUrl: './datos-estudiante.component.html',
  styleUrls: ['./datos-estudiante.component.css']
})
export class DatosEstudianteComponent implements OnInit {

  nombre:string=environment.user.name;
  tiempoJuego:string='2 horas';
  tikets:number=environment.user.tickets;

  constructor() { }

  ngOnInit(): void {
  }

}
