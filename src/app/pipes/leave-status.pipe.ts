import { LeaveStatus } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class LeaveStatusPipe implements PipeTransform {

  transform(value: LeaveStatus): string {
    switch (value) {
      case LeaveStatus.INITIAL:
          return "INITIALE";
      case LeaveStatus.PENDING_VALIDATION:
          return "EN_ATTENTE_VALIDATION";
      case LeaveStatus.VALIDATED:
          return "VALIDEE";
      case LeaveStatus.REJECTED:
        return "REJETEE";
      default:
        return "error";
    }
  }

}
