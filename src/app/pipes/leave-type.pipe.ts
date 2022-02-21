import { Pipe, PipeTransform } from '@angular/core';
import { LeaveType } from '../models';

@Pipe({
  name: 'leaveTypeLabel'
})
export class LeaveTypePipe implements PipeTransform {

  transform(value: LeaveType): string {
      switch (value) {
        case LeaveType.PAID_LEAVE:
            return "Congés Payés";
        case LeaveType.UNPAID_LEAVE:
            return "Congés non payés";
        default:
          return "RTT";
      }
  }

}
