export interface Leave {
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
