import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyHoliday, CompanyHolidayDto} from "../models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyHolidayService {

  constructor(private http: HttpClient) { }

  getByYear(year: string): Observable<CompanyHoliday[]> {
    return this.http.get<CompanyHoliday[]>(environment.backendUrl + '/company-holidays?year=' + year);
  }

  create(companyHoliday: CompanyHolidayDto): Observable<CompanyHoliday> {
    return this.http.post<CompanyHoliday>(environment.backendUrl + "/company-holidays", companyHoliday);
  }

  delete(holidayId: number): Observable<{ companyHolidayDeleted: boolean }> {
    return this.http.delete<{ companyHolidayDeleted: boolean }>(environment.backendUrl + '/company-holidays/' + holidayId);
  }
}


