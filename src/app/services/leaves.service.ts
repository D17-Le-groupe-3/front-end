import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Department, Leave, LeaveDto} from "../models";
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

  /**
   * Méthode permetant de récupérer la liste des demandes de congés pour un utilisateur.
   * Appel de l'API back-end via une requète GET
   * @param idEmployee : identifiant de l'utilisateur
   * @returns Observable de tableau de demandes de congé
   */
  getLeavesByEmployee(idEmployee: number): Observable<Leave[]> {
    return this.http.get<Leave[]>(environment.backendUrl + `/leaves?userId=${idEmployee}`);
  }


  /**
   * Methode permetant de supprimer une demande de congés
   * Apel l'API back-end via requete DELETE
   * @param idLeave : identifiant de la demande de congé.
   * @returns Observable d'un demande de congé comprenant les informations de la demande de congé supprimée.
   */
  deleteLeave(idLeave: number): Observable<Leave> {
    return this.http.delete<Leave>(environment.backendUrl + `/leaves/${idLeave}`);
  }

  /**
   * Récupère la liste des congés pour un utilisateur, mois et année donnés
   * @param employeeId id de l'employé
   * @param month mois
   * @param year année
   * @returns liste des congés du mois
   */
  getLeavesByEmployeeMonthAndYear(employeeId: number, month: number, year: number): Observable<Leave[]> {
    return this.http.get<Leave[]>(`${environment.backendUrl}/leaves?userId=${employeeId}&month=${month}&year=${year}`);
  }
  
   * Méthode permetant de rechercher les demandes de congé pour un service
   * Apel de l'API back-end via une requète GET
   * @param department : id du département
   * @returns Observable d'un tableau de demande de congé
   */
  getToValidateByDepartment(department: Department): Observable<Leave[]> {
    return this.http.get<Leave[]>(environment.backendUrl + '/leaves/to-validate?departmentId=' + department.id)
  }

  /**
   * Methode permetant de valider une demande de congé.
   * Appel de l'API back-end via une requète POST
   * @param leaveId : identifiant de la demande à valider
   * @returns Observable de demande de congé ( demande validée)
   */
  validate(leaveId: number): Observable<Leave> {
    return this.http.post<Leave>(environment.backendUrl + '/leaves/validate',
      { leaveId: leaveId },
      this.postOptions)
  }

  /**
  * Methode permetant de regeter une demande de congé.
  * Appel de l'API back-end via une requète POST
  * @param leaveId : identifiant de la demande à regeter
  * @returns Observable de demande de congé ( demande regetée)
  */
  reject(leaveId: number): Observable<Leave> {
    return this.http.post<Leave>(environment.backendUrl + '/leaves/reject',
      { leaveId: leaveId },
      this.postOptions)
  }

  postLeavesByEmployee(leave: LeaveDto) {
    return this.http.post<LeaveDto>(environment.backendUrl + "/leaves", leave);
  }
}
