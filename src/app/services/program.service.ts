import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProgramModel } from 'src/model/program.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getProgram():Observable<ProgramModel[]>{
    return this.http.get <ProgramModel[]> (`${environment.url}/program`);
  }

  getById(id: string):Observable<ProgramModel>{
    return this.http.get <ProgramModel> (`${environment.url}/program/${id}`);
  }

  setProgram(program: ProgramModel): Observable<ProgramModel>{
    return this.http.post <ProgramModel> (`${environment.url}/program`,program)
  }
}
