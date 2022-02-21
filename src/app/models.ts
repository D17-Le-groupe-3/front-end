export interface CompanyHoliday {
  id: number,
  date: Date,
  type: CompanyHolidayType,
  comment: string
}

export enum CompanyHolidayType {
  COMPANY_RTT,
  PUBLIC_HOLIDAY
}
