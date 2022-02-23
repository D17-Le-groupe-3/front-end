import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leave } from '../models';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http: HttpClient) { }

  getLeavesByEmployee(): Observable<Leave[]> {
    return this.http.get<Leave[]>( environment.backendUrl + "/absences");
  }

  getLeavesByEmployeeMonthYear(employeeId: number, month: string, year: string): Observable<Leave[]> {
    return this.http.get<Leave[]>(`${environment.backendUrl}/leaves?userID=${employeeId}&month=${month}&year=${year}`);
  }
}
