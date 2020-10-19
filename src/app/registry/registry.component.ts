import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
