import { RequestLeaveService } from './../../services/request-leave.service';
import { LeaveType } from '../../models';
import { Leave } from '../../models';
import { Component, OnInit} from "@angular/core";
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

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
  newLeave: Partial<Leave> = {};
  leaveForm!: FormGroup;
  leaveTypeControl = new FormControl('', [Validators.required]);
  leaveMotifControl= new FormControl('');

  public leaveTypeEnum = LeaveType;
  public requAbs !: Leave;
  msgError?: string;


  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 4000
  };

  minDate = new Date();

  constructor(private reqLeave: RequestLeaveService, private snackBar: MatSnackBar, private router: Router){


    this.leaveForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      leaveType: this.leaveTypeControl,
      leaveReason : this.leaveMotifControl

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
      userId: 1

    })
    .subscribe({next: () => {
      this.snackBar.open('Demande prise en compte', '', this.snackBarConfig);
      this.leaveForm.reset();
      this.newLeave = {};
      this.router.navigate(['/leaves/display'])
    },
    error: () => this.msgError = 'Demande rejetée'
    });




  }


}


