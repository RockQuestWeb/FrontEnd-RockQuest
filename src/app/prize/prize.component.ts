import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  nombre = new FormControl('', [Validators.required]);

  tickets = new FormControl('', [Validators.required]);

  getErrorMessageNombre(){
    return this.nombre.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageTickets(){
    return this.tickets.hasError('required') ? 'componente obligatorio' : '';
  }

/*________________________________________________________________________________________________________ */

  constructor() { }

  ngOnInit(): void {
  }

}
