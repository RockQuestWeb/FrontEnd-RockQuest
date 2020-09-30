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

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'llenar este componente';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
/*___________________________________________________________________________________________ */
  constructor() { }

  ngOnInit(): void {
  }

}
