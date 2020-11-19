import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ProgramModel } from 'src/model/program.model';
import { ProgressModel } from 'src/model/progress.model';
import { UserModel } from 'src/model/user.model';
import { ProgramService } from '../services/program.service';
import { ProgressService } from '../services/progress.service';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  name = new FormControl('', [Validators.required]);

  codeU = new FormControl('', [Validators.required]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'componente obligatorio';
    }
    return this.email.hasError('email') ? 'email no valido verifica @ ':'';
  }

  getErrorMessagePassword() {
      return this.password.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageCodeu() {
    return this.codeU.hasError('required') ? 'componente obligatorio' : '';
  }

/*___________________________________________________________________________________________ */
  constructor(
    private userService: UserService,
    private progressService: ProgressService,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
  }

  saveUser(){
    let newUser: UserModel = new UserModel();

    newUser.mail = this.email.value;
    newUser.password = this.password.value;
    newUser.name = this.name.value;
    newUser.universityCode = this.codeU.value;
    if(this.email.value != "" && this.password.value != "" && this.codeU.value != "" && this.name.value != ""){

      newUser.tickets = 0;
      let newProgress: ProgressModel = new ProgressModel();
      this.progressService.setProgress(newProgress).subscribe(
        (res)=>{
          newUser.progress = res._id;
        }
      );
      let newProgram: ProgramModel = new ProgramModel();
      this.programService.setProgram(newProgram).subscribe(
        (res)=>{
          newUser.programs = res._id;
        }
      )

      this.userService.setUser(newUser).subscribe(
        (res)=>{
          console.log(res);
        }
      )
    }else {
      console.log("incompleto")
    }
    

  }

}

