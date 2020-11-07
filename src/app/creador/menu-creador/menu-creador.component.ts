import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-creador',
  templateUrl: './menu-creador.component.html',
  styleUrls: ['./menu-creador.component.css']
})
export class MenuCreadorComponent implements OnInit {

  seleccion: Number;
  constructor() { this.seleccion = 0
  console.log(this.seleccion);}

  ngOnInit(): void {
  }

  selecWindows(number:Number){
    this.seleccion = number;
  }

}
