import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prize } from '../models/prize.model';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private http: HttpClient) { }

  getAchivement():Observable<Prize[]>{
    return this.http.get <Prize[]> (`${environment.url}/prize`);
  }

  getOne(id: string):Observable<Prize>{
    return this.http.get <Prize> (`${environment.url}/prize/${id}`);
  }

  setAchivement( prize: Prize){
    return this.http.post (`${environment.url}/prize`, prize);
  }

}
