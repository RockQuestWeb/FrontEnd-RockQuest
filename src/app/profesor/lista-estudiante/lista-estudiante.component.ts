import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ListaEstudianteModelo} from './lista-estudiante-modelo'

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {

  listaEstudiante:ListaEstudianteModelo[]=[
    {nombre:'andres',materia:'ingles 1',puntos:1},
    {nombre:'juan',materia:'ingles 2',puntos:2},
    {nombre:'julian',materia:'ingles 3',puntos:3},
    {nombre:'gustavo',materia:'ingles 4',puntos:4},
    {nombre:'paula',materia:'ingles 1',puntos:55},
    {nombre:'freddy',materia:'ingles 2',puntos:12},
    {nombre:'felipe',materia:'ingles 2',puntos:12},
    {nombre:'sebastian',materia:'ingles 3',puntos:32},
    {nombre:'nicolas',materia:'ingles 4',puntos:54},
    {nombre:'danny',materia:'ingles 1',puntos:87},
    {nombre:'ximena',materia:'ingles 4',puntos:64},
    {nombre:'santiago',materia:'ingles 1',puntos:454},
    {nombre:'alison',materia:'ingles 2',puntos:45},
    {nombre:'leidy',materia:'ingles 3',puntos:34},
    {nombre:'lorena',materia:'ingles 1',puntos:98},
    {nombre:'angie',materia:'ingles 3',puntos:76},
    {nombre:'jhonathan',materia:'ingles 1',puntos:45},
    {nombre:'pepito',materia:'ingles 4',puntos:76},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
