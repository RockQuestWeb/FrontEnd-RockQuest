import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario = new FormControl('', [Validators.required, Validators.email]);

  contrasena = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessageUsuario() {
    if (this.usuario.hasError('required')) {
      return 'componente obligatorio';
    }
   
    return this.usuario.hasError('usuario') ? 'usuario no valido verifica @ ':'';
  }

  getErrorMessageContrasena() {
    return this.contrasena.hasError('required') ? 'componente obligatorio' : '';
}

}
