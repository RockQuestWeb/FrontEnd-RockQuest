import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAchivement():Observable<User[]>{
    return this.http.get <User[]> (`${environment.url}/user`);
  }

  getOne(id: string):Observable<User>{
    return this.http.get <User> (`${environment.url}/user/${id}`);
  }

  setAchivement( user: User){
    return this.http.post (`${environment.url}/user`, user);
  }

}