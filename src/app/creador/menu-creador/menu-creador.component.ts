import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-creador',
  templateUrl: './menu-creador.component.html',
  styleUrls: ['./menu-creador.component.css']
})
export class MenuCreadorComponent implements OnInit {

  seleccion: Number;
  constructor() { this.seleccion = 0}

  ngOnInit(): void {
  }

  selecWindows(number:Number){
    this.seleccion = number;
    console.log(this.seleccion);
  }

}
