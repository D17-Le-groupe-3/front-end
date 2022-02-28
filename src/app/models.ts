import {DateTime} from 'luxon';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  role: Role,
  department: Department
}

export enum Role {
  ADMINISTRATOR = 'ADMINISTRATOR',
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
}

export interface Credentials {
  email: string;
  password: string;
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

export interface LeaveDto {
  startDate: DateTime,
  endDate: DateTime,
  type: LeaveType,
  reason: string,
  userId: number
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
  status: LeaveStatus
  type: CompanyHolidayType;
  comment: string;

  constructor(id: number, date: Date, status: LeaveStatus, type: CompanyHolidayType, comment: string) {
    this.id = id;
    this.date = new Date(date);
    this.status = status;
    this.type = type;
    this.comment = comment;
    console.log("hello");
  }
}

export interface CompanyHolidayDto {
  date: Date,
  type: CompanyHolidayType,
  comment: string
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
