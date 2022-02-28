import { NodeWithI18n } from '@angular/compiler';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';
import { Leave, LeaveStatus, LeaveType } from 'src/app/models';
import { LeavesService } from 'src/app/services/leaves.service';
import {UserService} from "../../services/user.service";
import { MAT_DIALOG_DATA, MatDialog,MatDialogRef } from '@angular/material/dialog';

/**
 * Composant de gestion de l'affichage de la liste des demandes de congés
 * @export
 * @class DisplayLeavesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-display-leaves',
  templateUrl: './display-leaves.component.html',
  styleUrls: ['./display-leaves.component.scss']
})


export class DisplayLeavesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['startDate', 'endDate', 'type', 'status', 'actions'];
  dataSource = new MatTableDataSource<Leave>();
  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 3000
  };

  constructor(private userService: UserService, private leavesService: LeavesService,
              private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.loadLeaves()
  }

  ngOnInit(): void {
  }


  /**
   * Methode de chargement des demandes de congés
   * Méthode appelée lors de la création du composant.
   * Affiche l'ensemble des demandes de congés de l'utilisateur autentifié.
   */
 
  loadLeaves(){
    this.leavesService.getLeavesByEmployee(this.userService.user!.id).subscribe({
      next: (leaves) => this.dataSource.data = leaves,
      error: (e) => console.log(e)
    });
  }

  /**
   * Suppression d'une demande de congés.
   * Méthode appelée lors du click sur le bouton "supprimer".
   * Affiche une demande de confirmation puis envoie une requête delete au back-end via le service.
   * Si une réponse Ok est reçue du back-end, affiche une confirmation de suppression puis rafraichit
   * la liste des demandes de congés.
   * @param id : identifiant de la demande
   */
  deleteLeave(leave: Leave) {

    const dialogRef = this.dialog.open(DialogLeaveDelete, {
      data: leave
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed)
        this.leavesService.deleteLeave(leave.id).subscribe({
          next: (leave) => {
            this.snackBar.open('La demande de congé du ' + leave.startDate + ' au ' + leave.endDate + ' a bien été supprimée', '', this.snackBarConfig);
            // Rechargement de la liste
            this.loadLeaves();
          }
        })
    });

  }

  /**
   * Méthode permetant d'activer ou desactiver le bouton supprimer pour chaque demande de congés
   * Vérifie les règles de gestion avant de donner l'accès au bouton :
   * - Ne pas supprimer une demande dont la date de début est antérieur à la date du jour
   * - Ne pas supprimer une demande en attente de validation
   *
   * @param row : donnée de la ligne du tableau soit la demande de congé
   * @returns bouléen true si le bouton doit être désactivé
   */
  disableDelete(row: Leave) {
    let flagIsDesabled = false;
    const status = row.status;

    // 1. Ne pas supprimer une demande inférieure à la date du jour
    flagIsDesabled = this.checkDateDateStartAfterCurrentDay(row.startDate);
    // 2. Ne pas supprimer une demande en attente de validation
    if (status === LeaveStatus.PENDING_VALIDATION) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  /**
   * Méthode permetant d'activer ou desactiver le bouton modifier pour chaque demande de congés
   * Vérifie les règles de gestion avant de donner l'accès au bouton :
   * - Ne pas supprimer une demande dont la date de début est antérieur à la date du jour
   * - Ne pas supprimer une demande en attente de validation ou validée
   *
   * @param row : donnée de la ligne du tableau soit la demande de congé
   * @returns bouléen true si le bouton doit être désactivé
   */
  disableModify(row: Leave) {
    let flagIsDesabled = false;
    const status = row.status;

    // 1. Ne pas modifier une demande inférieure à la date du jour
    flagIsDesabled = this.checkDateDateStartAfterCurrentDay(row.startDate);

    // 2. Ne pas supprimer une demande en attente de validation ou validée
    if (status === LeaveStatus.PENDING_VALIDATION || status === LeaveStatus.VALIDATED) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  /**
   * Vérifie que la date de début est antérieur à la date du jour
   * @param dateStart : date de début de congés
   * @returns booleen true si la date de début est antérieur à la date du jour
   */
  checkDateDateStartAfterCurrentDay(dateStart: Date): boolean {
    const startDate = DateTime.fromJSDate(new Date(dateStart));
    const dateOfDay = DateTime.now();
    let flagIsDesabled = false;

    if (startDate < dateOfDay) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}

/**
 * Composant de gestion de confirmation avant suppression d'une demande de congé
 */
@Component({
  selector: 'dialog-leave-delete',
  templateUrl: 'dialog-leave-delete.html'
})
export class DialogLeaveDelete {

  constructor( public dialogRef: MatDialogRef<DialogLeaveDelete>,@Inject(MAT_DIALOG_DATA) public leave: Leave) { }
}
