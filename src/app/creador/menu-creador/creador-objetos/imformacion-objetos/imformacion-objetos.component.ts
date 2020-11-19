import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/app/services/object.service';
import { ObjectModel } from 'src/model/object.model';

@Component({
  selector: 'app-imformacion-objetos',
  templateUrl: './imformacion-objetos.component.html',
  styleUrls: ['./imformacion-objetos.component.css']
})
export class ImformacionObjetosComponent implements OnInit {

  nombre: string;
  listaImgObjetos;
  existente;

  constructor(private objectServices: ObjectService) { 
    this.updateBase();
  }

  ngOnInit(): void {
  }

  save(){
    if(!this.existente){
      let newObject = new ObjectModel();
      newObject.image = "";
      newObject.name = this.nombre; 
      this.objectServices.post(newObject). subscribe (
        res =>{
          console.log(res);
        }
      );
      this.updateBase();
    }
  }

  updateBase(){
    this.listaImgObjetos = []

    let data = this.objectServices.getAll();
    data.forEach(element => {
      this.listaImgObjetos.push(element);
    });
    console.log(this.listaImgObjetos);
  }

}
