import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CategoryModel } from 'src/model/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: CategoryModel;

  title = new FormControl('', [Validators.required]);

  getErrorMessageTitulo() {
    return this.title.hasError('required') ? 'componente obligatorio' : '';
  }

/*___________________________________________________________________________________________ */
  constructor(private categoryService: CategoryService) {
    this.category= new CategoryModel();
   }
   
   setCategory(){
     console.log("Categoria")
     this.categoryService.setCategory(this.category).subscribe(
       (res)=>{
         console.log(res);
       }
     );
   }

  ngOnInit(): void {
  }

}
