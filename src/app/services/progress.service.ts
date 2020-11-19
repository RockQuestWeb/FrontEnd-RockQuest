import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProgressModel } from 'src/model/progress.model';


@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private http: HttpClient) { }

  getProgress():Observable<ProgressModel[]>{
    return this.http.get <ProgressModel[]> (`${environment.url}/progress`);
  }

  getById(id:string):Observable<ProgressModel>{
    return this.http.get <ProgressModel> (`${environment.url}/progress/${id}`);
  }

  setProgress( progress: ProgressModel): Observable<ProgressModel>{
    return this.http.post <ProgressModel> (`${environment.url}/progress`, progress);
  }

}

