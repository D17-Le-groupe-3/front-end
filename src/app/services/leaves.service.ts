import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leave } from '../models';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http: HttpClient) { }

  getLeavesByEmployee(): Observable<Leave[]> {
    return this.http.get<Leave[]>("http://localhost:3000/absences");
  }

}
