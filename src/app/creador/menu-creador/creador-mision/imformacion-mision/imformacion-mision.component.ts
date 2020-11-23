import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imformacion-mision',
  templateUrl: './imformacion-mision.component.html',
  styleUrls: ['./imformacion-mision.component.css']
})
export class ImformacionMisionComponent implements OnInit {

  idMision:number=1;

  listaMateria:string[]=['ingles basico 1','ingles basico 2','ingles basico 3','ingles basico 4'];

  constructor() { }

  ngOnInit(): void {
    this.listaMateria.forEach(element => {
      this.listaMateria.push(element);
    });
  }

}
