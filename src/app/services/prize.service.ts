import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrizeModel } from 'src/model/prize.model';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private http: HttpClient) { }

  getPrize():Observable<PrizeModel[]>{
    return this.http.get <PrizeModel[]> (`${environment.url}/prize`);
  }

  getOne(id: string):Observable<PrizeModel>{
    return this.http.get <PrizeModel> (`${environment.url}/prize/${id}`);
  }

  setPrize( prize: PrizeModel){
    return this.http.post (`${environment.url}/prize`, prize);
  }

}
