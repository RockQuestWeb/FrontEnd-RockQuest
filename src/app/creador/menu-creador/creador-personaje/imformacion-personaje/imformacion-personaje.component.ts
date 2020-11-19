import { Component, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc.service';
import { NpcModel } from 'src/model/npc.model';

@Component({
  selector: 'app-imformacion-personaje',
  templateUrl: './imformacion-personaje.component.html',
  styleUrls: ['./imformacion-personaje.component.css']
})
export class ImformacionPersonajeComponent implements OnInit {

  listaImgPersonajes;
  existente;
  nombre: string;

  constructor(private NPCService:NpcService) {
    this.updateBase();
   }

  ngOnInit(): void {
  }

  save(){
    if(!this.existente){
      let newNPC = new NpcModel();
      newNPC.image = "";
      newNPC.name = this.nombre; 
      this.NPCService.post(newNPC). subscribe (
        res =>{
          console.log(res);
        }
      );
      this.updateBase();
    }
  }

  updateBase(){
    this.listaImgPersonajes = []

    let data = this.NPCService.getAll();
    data.forEach(element => {
      this.listaImgPersonajes.push(element);
    });
    console.log(this.listaImgPersonajes);
  }

}
