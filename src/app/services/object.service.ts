import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjectModel } from 'src/model/object.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ObjectModel[]>{
    return this.http.get <ObjectModel[]> (`${environment.url}/object`)
  }

  post(item: ObjectModel){
    return this.http.post (`${environment.url}/object`,item)
  }

}
