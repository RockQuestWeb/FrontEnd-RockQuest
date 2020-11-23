import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {PremiosModel} from './premios-model'
import { PrizeService } from "../../../app/services/prize.service";

@Component({
  selector: 'app-tabla-premios',
  templateUrl: './tabla-premios.component.html',
  styleUrls: ['./tabla-premios.component.css']
})
export class TablaPremiosComponent implements OnInit {

  listaPremios=[];

  constructor(private prizeService: PrizeService) { 
    this.update()
  }

  ngOnInit(): void {
  }

  update(){
    let data = this.prizeService.getPrize();
    data.forEach(element => {
      this.listaPremios.push(element);
    });
    console.log(this.listaPremios)
  }



}
