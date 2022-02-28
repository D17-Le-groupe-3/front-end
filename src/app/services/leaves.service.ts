import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Department, Leave, LeaveDto, ModifyLeaveDTO,  } from "../models";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

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

  /**
   * Recherche une demande de congé  à partir de son id
   * @param idLeave
   * @returns
   */
  getLeaveById(idLeave: number): Observable<ModifyLeaveDTO> {
    console.log('id dans service', idLeave);
    return this.http.get<ModifyLeaveDTO>(environment.backendUrl + `/leaves/${idLeave}`);
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

  postLeavesByEmployee(leave: LeaveDto) {
    return this.http.post<LeaveDto>(environment.backendUrl + "/leaves", leave);
  }

  /**
   * Methode permetant de modifier une demande de congés
   * @param id : identifiant de la demande
   * @param leave : informations de la demande à modifier
   * @returns demande de congé modifiée
   */
  modifyLeaves(id:number,leave: ModifyLeaveDTO) {
    return this.http.put<LeaveDto>(environment.backendUrl + `/leaves/${id}`,{leave:leave});
  }
}
