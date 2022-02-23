export interface User {
  firstName: string,
  lastName: string
}

export interface Department {
  id: number,
  label: string
}

export interface Leave {
  id: number,
  startDate: Date,
  endDate: Date,
  type: LeaveType,
  status: LeaveStatus,
  user: User
}

export enum LeaveType {
  PAID_LEAVE = 'PAID_LEAVE',
  UNPAID_LEAVE = 'UNPAID_LEAVE',
  RTT = 'RTT'
}

export enum LeaveStatus {
  INITIAL = 'INITIAL',
  PENDING_VALIDATION = 'PENDING_VALIDATION',
  VALIDATED = 'VALIDATED',
  REJECTED = 'REJECTED'
}

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
