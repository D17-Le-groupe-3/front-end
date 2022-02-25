import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveCounters } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LeaveCountersService {

  constructor(private http: HttpClient) { }

  getLeaveCounterByEmployee(idEmployee: number): Observable<LeaveCounters> {
    return this.http.get<LeaveCounters>(environment.backendUrl + `/leave-counter?userId=${idEmployee}`);
  }

}
