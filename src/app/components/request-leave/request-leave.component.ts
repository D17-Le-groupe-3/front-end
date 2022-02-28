import { Leave, LeaveDto, ModifyLeaveDTO } from 'src/app/models';
import {LeavesService} from 'src/app/services/leaves.service';
import {LeaveType} from '../../models';
import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from "../../services/user.service";
import { ActivatedRoute, Router } from '@angular/router';

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

export class RequestComponent implements OnInit {
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
  // Gestion pour modification
  actionMode = 'creation';
  leaveToModify!: ModifyLeaveDTO;
  leaveToModifyId!: number;


  constructor(private userService: UserService, private reqLeave: LeavesService, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    this.initFormgroup();
  }

initFormgroup(){
    this.leaveForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      leaveType: new FormControl('', [Validators.required]),
      leaveReason: new FormControl('')
    })
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      //récupération des paramètres
      this.leaveToModifyId = Number(params.get('leaveId'));
      // Recherche de la demande de congé pour identifiant passé en paramètre
      if (this.leaveToModifyId) {
        this.reqLeave.getLeaveById(this.leaveToModifyId).subscribe((result) => {
          if (result) {
            this.leaveToModify = result;
            this.leaveForm.setValue({
              startDate: this.leaveToModify.startDate,
              endDate: this.leaveToModify.endDate,
              leaveType: this.leaveToModify.type,
              leaveReason: this.leaveToModify.reason ? this.leaveToModify.reason : ''
            });
          }
        });
      }
    })
  }


  /**
   * Methoded'enregistrement des informations renseignées.
   * Appel du service postLeavesByEmployee permetant l'appel de l'API bach.
   * puis renvoie sur la liste des demandes de congés.
   * @returns
   */
  submitForm() {
    // Pour une création
    if (this.actionMode === 'creation') {
      if (this.leaveForm.valid) {
        this.reqLeave.postLeavesByEmployee({
          startDate: this.leaveForm.value.startDate,
          endDate: this.leaveForm.value.endDate,
          type: this.leaveForm.value.leaveType,
          reason: this.leaveForm.value.leaveReason,
          userId: 2
        })
          .subscribe({
            next: () => {
              this.snackBar.open('Demande prise en compte', '', this.snackBarConfig);
              this.leaveForm.reset();
              this.router.navigate(['/leaves/display'])
            },
            error: () => this.msgError = 'Demande rejetée'
          });
      }
      // Pour une modification
    } else {
      if (this.leaveForm.valid) {
        this.reqLeave.modifyLeaves(this.leaveToModifyId, {
          startDate: this.leaveForm.value.startDate,
          endDate: this.leaveForm.value.endDate,
          type: this.leaveForm.value.leaveType,
          reason: this.leaveForm.value.leaveReason,
          status: this.leaveToModify.status
        })
          .subscribe({
            next: () => {
              this.snackBar.open('Demande prise en compte', '', this.snackBarConfig);
              this.leaveForm.reset();
              this.router.navigate(['/leaves/display'])
            },
            error: () => this.msgError = 'Demande rejetée'
          });
      }
    }
  }


  /**
   * Methode permetant d'annuler la modification
   * Retourne à la liste des demandes de congés sans intervention
   */
  cancel() {
    this.router.navigate(['/leaves/display']);
  }
}
