import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAchivement():Observable<Group[]>{
    return this.http.get <Group[]> (`${environment.url}/group`);
  }

  getOne(id: string):Observable<Group>{
    return this.http.get <Group> (`${environment.url}/group/${id}`);
  }

  setAchivement( group: Group){
    return this.http.post (`${environment.url}/group`, group);
  }

}
