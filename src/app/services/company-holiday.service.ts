import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyHoliday} from "../models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyHolidayService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère les jours fériés et RTT employeurs d'une année donnée
   * @param year année
   * @returns liste des jours fériés et RTT employeurs du année
   */
  getByYear(year: string): Observable<CompanyHoliday[]> {
    return this.http.get<CompanyHoliday[]>(environment.backendUrl + '/company-holidays?year=' + year);
  }

  /**
   * Récupère les jours fériés et RTT employeurs d'un mois et d'une année donné
   * @param month mois
   * @param year année
   * @returns liste des jours fériés et RTT employeurs du mois
   */
  getByMonthAndYear(month: number, year: number): Observable<CompanyHoliday[]> {  
    return this.http.get<CompanyHoliday[]>(`${environment.backendUrl}/company-holidays?month=${month}&year=${year}`);
  }

  /**
   * Supprime le jour férié ou RTT employeur dont l'id est donné en paramètre
   * @param holidayId id
   * @returns le jour férié ou RTT employeur supprimé
   */
  delete(holidayId: number): Observable<{ companyHolidayDeleted: boolean }> {
    return this.http.delete<{ companyHolidayDeleted: boolean }>(environment.backendUrl + '/company-holidays/' + holidayId);
  }
}


