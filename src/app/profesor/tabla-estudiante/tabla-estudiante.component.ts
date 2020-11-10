import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TablaEstudianteModelo } from './tabla-estudiante-modelo'

@Component({
  selector: 'app-tabla-estudiante',
  templateUrl: './tabla-estudiante.component.html',
  styleUrls: ['./tabla-estudiante.component.css']
})
export class TablaEstudianteComponent implements OnInit {

  listaEstudiantes:TablaEstudianteModelo[]=[
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
    {nombre:'andres andres andres andres',materia:'ingles 1',puntos:5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
