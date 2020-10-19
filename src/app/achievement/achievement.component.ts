import { Component, OnInit } from '@angular/core';
import {FormControl, Validators}from '@angular/forms'
import { Achievement } from '../models/achievement.model';
import { AchievementService } from '../services/achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achivement: Achievement;

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

  constructor( private achivementServices: AchievementService) { 
    this.achivement = new Achievement();
  }

  setAchivement(){
    console.log("Logro");
    this.achivementServices.setAchivement(this.achivement).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
