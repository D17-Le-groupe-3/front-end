import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Department, Leave} from "../models";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  postOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getLeavesByEmployee(idEmployee: number): Observable<Leave[]> {
    return this.http.get<Leave[]>(environment.backendUrl + `/leaves?userId=${idEmployee}`);
  }

  deleteLeave(idLeave: number): Observable<Leave> {
    return this.http.delete<Leave>(environment.backendUrl + `/leaves/${idLeave}`);
  }

  getToValidateByDepartment(department: Department): Observable<Leave[]> {
    return this.http.get<Leave[]>(environment.backendUrl + '/leaves/to-validate?departmentId=' + department.id)
  }

  validate(leaveId: number): Observable<Leave> {
    return this.http.post<Leave>(environment.backendUrl + '/leaves/validate',
      { leaveId: leaveId },
      this.postOptions)
  }

  reject(leaveId: number): Observable<Leave> {
    return this.http.post<Leave>(environment.backendUrl + '/leaves/reject',
      { leaveId: leaveId },
      this.postOptions)
  }
}
