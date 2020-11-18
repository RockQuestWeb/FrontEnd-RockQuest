import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserModel } from 'src/model/user.model';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario = new FormControl('', [Validators.required, Validators.email]);

  contrasena = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    let correo = this.usuario.value;
    let contraseña = this.contrasena.value;

    try{
      if(correo!= "" || contraseña!= ""){
        let data = this.userService.getOneByMail(correo).subscribe(
          (res)=>{
            if(res != null){
              if(res.password == contraseña){
                console.log("login");
              }else {
                console.log("contraseña incorrecta");
              }
            }else {
              console.log("denegado")
            }
          }
        )
      }
    }catch(err){
      console.error("probalemas con el servidor")
    }

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
