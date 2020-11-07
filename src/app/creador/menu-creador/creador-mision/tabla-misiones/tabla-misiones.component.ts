import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TablaMisionModelo} from './tabla-mision-modelo'

@Component({
  selector: 'app-tabla-misiones',
  templateUrl: './tabla-misiones.component.html',
  styleUrls: ['./tabla-misiones.component.css']
})
export class TablaMisionesComponent implements OnInit {

  listaMisiones:TablaMisionModelo[]=[
    {orden:'1',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'2',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'3',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'4',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'5',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'6',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'7',condicion:'pequeña',dialogo:'hola como estas'},
    {orden:'8',condicion:'pequeña',dialogo:'hola como estas'}
  ];
    
  

  constructor() { }

  ngOnInit(): void {
  }

}
