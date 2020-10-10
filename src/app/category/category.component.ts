import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title = new FormControl('', [Validators.required]);

  getErrorMessageTitulo() {
    return this.title.hasError('required') ? 'componente obligatorio' : '';
  }

/*___________________________________________________________________________________________ */
  constructor() { }

  ngOnInit(): void {
  }

}
