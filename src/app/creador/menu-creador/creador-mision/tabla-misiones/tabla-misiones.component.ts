import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import {TablaMisionModelo} from './tabla-mision-modelo'

@Component({
  selector: 'app-tabla-misiones',
  templateUrl: './tabla-misiones.component.html',
  styleUrls: ['./tabla-misiones.component.css']
})
export class TablaMisionesComponent implements OnInit {

  listaMisiones:TablaMisionModelo[]=[
  ];
  
  

  constructor() {
    let inf = {orden:'1',condicion:'intento',dialogo: 'hola'};
    this.listaMisiones.push(inf);
   }

  addList(){
    let data = environment.data;
    if(data[3] == "true"){
      data[3] = "false";
      let inf = {orden:data[0],condicion:data[1],dialogo: data[2]};
      this.listaMisiones.push(inf);
    }
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.addList();
    }, 500);
  }

  delete(item:any){
    this.listaMisiones.splice(item,1);
    let temp = [];
    temp.push("");
    temp.push("");
    temp.push("");
    temp.push("false");
    environment.data = temp;
  }

}
