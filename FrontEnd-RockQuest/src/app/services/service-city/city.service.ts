import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

    getCountries() {
    return this.http.get<any>('assets/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { this.getSelectedCountries(data); return data; });
    }

    getSelectedCountries(cities:any){
      console.log(cities);
    }
    
}
