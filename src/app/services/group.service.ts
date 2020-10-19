import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupModel } from 'src/model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroup():Observable<GroupModel[]>{
    return this.http.get <GroupModel[]> (`${environment.url}/group`);
  }

  getOne(id: string):Observable<GroupModel>{
    return this.http.get <GroupModel> (`${environment.url}/group/${id}`);
  }

  setGroup( group: GroupModel){
    return this.http.post (`${environment.url}/group`, group);
  }

}
