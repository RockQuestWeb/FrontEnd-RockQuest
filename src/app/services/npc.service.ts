import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NpcModel } from 'src/model/npc.model';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  constructor(private http:HttpClient) { }

  getAll():Observable<NpcModel[]>{
    return this.http.get <NpcModel[]>(`${environment.url}/npc`)
  }

  post(item: NpcModel){
    return this.http.post (`${environment.url}/npc`,item)
  }
}
