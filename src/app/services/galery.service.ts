import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(private http: HttpClient) { }

  setImage(image): Observable<any>{
    let data = image;

    return this.http.post(
      'https://api.cloudinary.com/v1_1/nsdata/image/upload',
      data
    )
  }
}
