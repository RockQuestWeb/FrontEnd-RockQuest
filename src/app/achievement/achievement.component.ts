import { Component, OnInit } from '@angular/core';
import {FormControl, Validators}from '@angular/forms'

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  nombre = new FormControl('', [Validators.required]);
  imagen = new FormControl('', [Validators.required]);

  getErrorMessageTitulo() {
    return this.title.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageNombre() {
    return this.nombre.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageImagen() {
    return this.imagen.hasError('required') ? 'componente obligatorio' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
