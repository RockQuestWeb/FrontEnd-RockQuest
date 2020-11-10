import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser():Observable<UserModel[]>{
    return this.http.get <UserModel[]> (`${environment.url}/user`);
  }

  getOne(id: string):Observable<UserModel>{
    return this.http.get <UserModel> (`${environment.url}/user/${id}`);
  }

  setUser( user: UserModel){
    return this.http.post (`${environment.url}/user`, user);
  }

}