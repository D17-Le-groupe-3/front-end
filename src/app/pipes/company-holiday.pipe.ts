import {Pipe, PipeTransform} from '@angular/core';
import {CompanyHolidayType} from "../models";

@Pipe({
  name: 'ch'
})
export class CompanyHolidayPipe implements PipeTransform {

  transform(value: CompanyHolidayType): string {
    return CompanyHolidayType.PUBLIC_HOLIDAY ? 'Férié' : 'RTT employeur';
  }

}
