import { LeaveDto } from './../models';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RequestLeaveService {

  constructor(private http: HttpClient) { }

  postLeavesByEmployee(leave: LeaveDto) {
    console.log("leave service", leave);
    return this.http.post<LeaveDto[]>(environment.backendUrl + "/leaves", leave);
  }

}
