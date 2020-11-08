import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imformacion-objetos',
  templateUrl: './imformacion-objetos.component.html',
  styleUrls: ['./imformacion-objetos.component.css']
})
export class ImformacionObjetosComponent implements OnInit {

  listaImgObjetos:string[]=['objeto 1','objeto 2','objeto 3','objeto 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
