import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PrizeModel } from 'src/model/prize.model';
import { PrizeService } from '../services/prize.service';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  prize: PrizeModel;

  nombre = new FormControl('', [Validators.required]);

  tickets = new FormControl('', [Validators.required]);

  getErrorMessageNombre(){
    return this.nombre.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageTickets(){
    return this.tickets.hasError('required') ? 'componente obligatorio' : '';
  }

/*________________________________________________________________________________________________________ */

  constructor(private prizeServices: PrizeService) {
    this.prize = new PrizeModel();
   }

  setPrize(){
    console.log("Premio");
    this.prizeServices.setPrize(this.prize).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
