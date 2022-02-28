import { CompanyHolidayService } from 'src/app/services/company-holiday.service';
import { CompanyHolidayType } from '../../models';
import { Component, OnInit} from "@angular/core";
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

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
  selector: 'app-create-company-holiday',
  templateUrl: './create-company-holiday.component.html',
  styleUrls: ['./create-company-holiday.component.scss']
})
export class CreateCompanyHolidayComponent implements OnInit {

  matcherType = new MyErrorStateMatcher();
  companyHolidayForm!: FormGroup;
  public companyHolidayTypeEnum = CompanyHolidayType;
  msgError?: string;
  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 4000
  };
  minDate = new Date();

  constructor(private companyHolidayService: CompanyHolidayService, private snackBar: MatSnackBar, private router: Router){
    this.companyHolidayForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      companyHolidayType: new FormControl('', [Validators.required]),
      comment : new FormControl('')
    })
    this.minDate.setDate(this.minDate.getDate()+1)
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(!this.companyHolidayForm.valid)
      return;

    this.companyHolidayService.create({
      date: this.companyHolidayForm.value.date,
      type: this.companyHolidayForm.value.companyHolidayType,
      comment: this.companyHolidayForm.value.comment,
    })
    .subscribe({
      next: () => {
        this.snackBar.open('Demande prise en compte', '', this.snackBarConfig);
        this.companyHolidayForm.reset();
        this.router.navigate(['company-holiday']);
      },
      error: () => {
        this.msgError = 'Demande rejetée';
        this.snackBar.open('Demande rejeté', '', this.snackBarConfig);
      }
    });
  }

  cancel(){
    this.router.navigate(['company-holiday']);
  }
}
