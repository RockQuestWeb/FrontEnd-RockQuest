import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AchivementModel } from "../../model/achievement.model";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private http: HttpClient) { }

  getAchivement():Observable<AchivementModel[]>{
    return this.http.get <AchivementModel[]> (`${environment.url}/achivement`);
  }

  getOne(id: string):Observable<AchivementModel>{
    return this.http.get <AchivementModel> (`${environment.url}/achivement/${id}`);
  }

  setAchivement( achievement: AchivementModel){
    return this.http.post (`${environment.url}/achivement`, achievement);
  }
}
