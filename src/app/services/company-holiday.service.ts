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

  getByYear(year: string): Observable<CompanyHoliday[]> {
    return this.http.get<CompanyHoliday[]>(environment.backendUrl + '/company-holidays/' + year);
  }
}


