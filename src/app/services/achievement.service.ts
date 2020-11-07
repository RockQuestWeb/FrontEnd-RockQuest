import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Achievement } from "../models/achievement.model";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private http: HttpClient) { }

  getAchivement():Observable<Achievement[]>{
    return this.http.get <Achievement[]> (`${environment.url}/achivement`);
  }

  getOne(id: string):Observable<Achievement>{
    return this.http.get <Achievement> (`${environment.url}/achivement/${id}`);
  }

  setAchivement( achievement: Achievement){
    return this.http.post (`${environment.url}/achivement`, achievement);
  }
}
