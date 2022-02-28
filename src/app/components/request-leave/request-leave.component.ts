import {LeavesService} from 'src/app/services/leaves.service';
import {LeaveType} from '../../models';
import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from "../../services/user.service";

/**
 * Contrôle si il n'y a pas d'erreurs dans le formulaire
 */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-demande',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.scss'],
})

export class RequestComponent implements OnInit{
  matcherType = new MyErrorStateMatcher();
  leaveForm!: FormGroup;
  public leaveTypeEnum = LeaveType;
  msgError?: string;
  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 4000
  };
  minDate = new Date();

  constructor(private userService: UserService, private reqLeave: LeavesService, private snackBar: MatSnackBar, private router: Router){
    this.leaveForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      leaveType: new FormControl('', [Validators.required]),
      leaveReason : new FormControl('')
    })
    this.minDate.setDate(this.minDate.getDate()+1)
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.leaveForm.value)
    console.log(this.leaveForm.valid)
    if(!this.leaveForm.valid)
      return;

    this.reqLeave.postLeavesByEmployee({
      startDate: this.leaveForm.value.startDate,
      endDate: this.leaveForm.value.endDate,
      type: this.leaveForm.value.leaveType,
      reason: this.leaveForm.value.leaveReason,
      userId: this.userService.user!.id

    })
    .subscribe({next: () => {
      this.snackBar.open('Demande prise en compte', '', this.snackBarConfig);
      this.leaveForm.reset();
      this.router.navigate(['/leaves/display'])
    },
    error: () => this.msgError = 'Demande rejetée'
    });
  }
}


