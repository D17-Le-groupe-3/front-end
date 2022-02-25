import { Pipe, PipeTransform } from '@angular/core';
import { LeaveType } from '../models';

@Pipe({
  name: 'leaveType'
})
export class RequestLeaveTypePipe implements PipeTransform {

  transform(value: LeaveType | string): string {
      switch (value) {
        case LeaveType.PAID_LEAVE:
            return "Congés Payés";
        case LeaveType.UNPAID_LEAVE:
            return "Congés sans solde";
        default:
          return "RTT";
      }
  }

}
