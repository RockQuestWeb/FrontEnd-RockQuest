import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crear-mision',
  templateUrl: './crear-mision.component.html',
  styleUrls: ['./crear-mision.component.css']
})
export class CrearMisionComponent implements OnInit {

  numeracion: String;
  condicion: String;
  dialogo: String;

  constructor() { 
    this.numeracion = "";
    this.condicion = "";
    this.dialogo = "";
  }

  loadList(){
    let data = environment.data;
    if(data[0]!= this.numeracion  && data[2]!= this.dialogo){
      let item = [];
      item.push(this.numeracion);
      item.push(this.condicion);
      item.push(this.dialogo);
      item.push("true");
      environment.data = item;
    }
  }

  ngOnInit(): void {
  }

}
