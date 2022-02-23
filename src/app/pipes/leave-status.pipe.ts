import { LeaveStatus } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leaveStatusLabel'
})
export class LeaveStatusPipe implements PipeTransform {

  transform(value: LeaveStatus): string {
    switch (value) {
      case LeaveStatus.INITIAL:
        return "Initiale";
      case LeaveStatus.PENDING_VALIDATION:
        console.log("EN ATTENTE VALIDATION");
        return "En attente de validation";
      case LeaveStatus.VALIDATED:
        return "Validée";
      case LeaveStatus.REJECTED:
        return "Rejetée";
      default:
        return "error";
    }
  }
}
