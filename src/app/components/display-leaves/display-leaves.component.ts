import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DateTime } from 'luxon';
import { Leave, LeaveStatus, LeaveType } from 'src/app/models';
import { LeavesService } from 'src/app/services/leaves.service';



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

  constructor(private leavesService: LeavesService, private snackBar: MatSnackBar) {
    this.leavesService.getLeavesByEmployee(12).subscribe({
      next: (leaves) => this.dataSource.data = leaves,
      error: (e) => console.log(e)
    });
  }

  ngOnInit(): void {
  }

  deleteLeave(id: number) {
    this.leavesService.deleteLeave(id).subscribe({
      next: (leave) => {
        this.snackBar.open('La demande de congé du ' + leave.startDate + ' au ' + leave.endDate + ' a bien été supprimée', '', this.snackBarConfig);
        // Rechargement de la liste
        this.leavesService.getLeavesByEmployee(12).subscribe({
          next: (leaves) => this.dataSource.data = leaves,
          error: (e) => console.log(e)
        });
      }
    })
  }

  ennableEdition() {

  }

  disableDelete(row: Leave) {
    let flagIsDesabled = false;
    const startDate = DateTime.fromJSDate(new Date(row.startDate));
    const dateOfDay = DateTime.now();
    const status = row.status;

    // 1. Ne pas supprimer une demande inférieure à la date du jour

    if (startDate < dateOfDay) {
      flagIsDesabled = true;
    }
    // 2. Ne pas supprimer une demande en attente de validation
    if (status === LeaveStatus.PENDING_VALIDATION) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  disableModify(row: Leave) {
    let flagIsDesabled = false;
    const status = row.status;
    const startDate = DateTime.fromJSDate(new Date(row.startDate));
    const dateOfDay = DateTime.now();

    // 1. Ne pas modifier une demande inférieure à la date du jour - TODO à confirmer
    if (startDate < dateOfDay) {
      flagIsDesabled = true;
    }
    // 2. Ne pas supprimer une demande en attente de validation ou validée
    if (status === LeaveStatus.PENDING_VALIDATION || status === LeaveStatus.VALIDATED) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
