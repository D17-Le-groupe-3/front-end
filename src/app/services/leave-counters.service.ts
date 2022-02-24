import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveCounters } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LeaveCountersService {

  constructor(private http: HttpClient) { }

  getLeaveCounterById(idEmployee: number): Observable<LeaveCounters> {
    return this.http.get<LeaveCounters>(`http://localhost:3000/leave-counters`)
  }

}
