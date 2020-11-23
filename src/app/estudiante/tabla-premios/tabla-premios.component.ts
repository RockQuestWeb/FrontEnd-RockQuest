import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {PremiosModel} from './premios-model'

@Component({
  selector: 'app-tabla-premios',
  templateUrl: './tabla-premios.component.html',
  styleUrls: ['./tabla-premios.component.css']
})
export class TablaPremiosComponent implements OnInit {

  listaPremios:PremiosModel[]=[
    {nombrePremio:'llegarTarde',puntosPremio:25},
    {nombrePremio:'Quiz',puntosPremio:40},
    {nombrePremio:'Danny',puntosPremio:1000000},
    {nombrePremio:'llegarTarde',puntosPremio:25},
    {nombrePremio:'Quiz',puntosPremio:40},
    {nombrePremio:'Danny',puntosPremio:1000000}
  ]

  constructor() { }

  ngOnInit(): void {
    this.listaPremios.forEach(element => {
      this.listaPremios.push(element)
    });
  }

}
