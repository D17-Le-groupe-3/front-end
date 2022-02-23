export interface Leave {
  id: number,
  startDate: Date,
  endDate: Date,
  type: LeaveType,
  status: LeaveStatus
}

export enum LeaveType {
	PAID_LEAVE,
	UNPAID_LEAVE,
	RTT
}

export enum LeaveStatus {
	INITIAL,
	PENDING_VALIDATION,
	VALIDATED,
	REJECTED
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
