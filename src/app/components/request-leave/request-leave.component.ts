import { RequestLeaveService } from './../../services/request-leave.service';
import { LeaveType } from '../../models';
import { Leave } from '../../models';
import { Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({

  selector: 'app-demande',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.scss'],


})

export class RequestComponent implements OnInit{

  newLeave: Partial<Leave> = {};
  leaveForm!: FormGroup;
  // leaveForm = this.formBuilder.group({

  //   startDate: ['', Validators.required],
  //   endDate: ['', Validators.required],
  //   leave: ['', Validators.required]
  // })
  leaveTypeControl = new FormControl('', [Validators.required]);
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
      leaveType: this.leaveTypeControl

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
      reason: "",
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



  // validate(){
  //   this.msgOk = undefined;
  //   this.msgError = undefined;

  //   this.reqLeave.postLeavesByEmployee(this.newLeave)
  //     .subscribe({
  //       next: () => {
  //         this.msgOk = 'Demande prise en compte';
  //         leaveForm.reset();
  //         this.newLeave = {};
  //       },
  //       error: () => this.msgError = "Aïe c'est pas bon"
  //     });


  // }










}


