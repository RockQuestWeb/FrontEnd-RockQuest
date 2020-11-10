import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from 'src/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory():Observable<CategoryModel[]>{
    return this.http.get <CategoryModel[]> (`${environment.url}/category`);
  }

  getOne(id: string):Observable<CategoryModel>{
    return this.http.get <CategoryModel> (`${environment.url}/category/${id}`);
  }

  setCategory( category: CategoryModel){
    return this.http.post (`${environment.url}/category`, category);
  }

}
