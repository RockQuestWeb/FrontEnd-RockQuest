import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condiciones-objeto',
  templateUrl: './condiciones-objeto.component.html',
  styleUrls: ['./condiciones-objeto.component.css']
})
export class CondicionesObjetoComponent implements OnInit {

  listaObjetos:string[]=['objeto 1','objeto 2','objeto 3','objeto 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
