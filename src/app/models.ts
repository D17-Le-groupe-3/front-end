export interface User {
  firstName: string,
  lastName: string
}

export interface Department {
  id: number,
  label: string
}

export class Leave {
  id: number;
  startDate: Date;
  endDate: Date;
  type: LeaveType;
  status: LeaveStatus;
  user: User;

  constructor(id: number, startDate: Date, endDate: Date, type: LeaveType, 
    status: LeaveStatus,user : User) {
    this.id = id;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.type = type;
    this.status = status;
    this.user = user;
    
  }
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

export class CompanyHoliday {
  id: number;
  date: Date;
  type: CompanyHolidayType;
  comment: string;

  constructor(id: number, date: Date, type: CompanyHolidayType, comment: string) {
    this.id = id;
    this.date = new Date(date);
    this.type = type;
    this.comment = comment;
    console.log("hello");
  }
}

export enum CompanyHolidayType {
  COMPANY_RTT = 'COMPANY_RTT',
  PUBLIC_HOLIDAY = 'PUBLIC_HOLIDAY'
}

export interface LeaveCounters {
  userId: number,
  remainingPaidLeaves: number,
  paidLeaveTaken: number,
  remainingRtt: number,
  RttTaken: number,
  unpaidLeaveTaken: number
}
