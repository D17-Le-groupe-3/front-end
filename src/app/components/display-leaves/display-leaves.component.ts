import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DateTime} from 'luxon';
import {Leave, LeaveStatus} from 'src/app/models';
import {LeavesService} from 'src/app/services/leaves.service';
import {UserService} from "../../services/user.service";


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

  constructor(private userService: UserService, private leavesService: LeavesService, private snackBar: MatSnackBar) {
    this.loadLeaves()
  }

  ngOnInit(): void {
  }

  loadLeaves(){
    this.leavesService.getLeavesByEmployee(this.userService.user!.id).subscribe({
      next: (leaves) => this.dataSource.data = leaves,
      error: (e) => console.log(e)
    });
  }

  deleteLeave(id: number) {
    this.leavesService.deleteLeave(id).subscribe({
      next: (leave) => {
        this.snackBar.open('La demande de congé du ' + leave.startDate + ' au ' + leave.endDate + ' a bien été supprimée', '', this.snackBarConfig);
        // Rechargement de la liste
        this.loadLeaves();
      }
    })
  }

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

  disableModify(row: Leave) {
    let flagIsDesabled = false;
    const status = row.status;

    // 1. Ne pas modifier une demande inférieure à la date du jour - TODO à confirmer
    flagIsDesabled = this.checkDateDateStartAfterCurrentDay(row.startDate);

    // 2. Ne pas supprimer une demande en attente de validation ou validée
    if (status === LeaveStatus.PENDING_VALIDATION || status === LeaveStatus.VALIDATED) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  checkDateDateStartAfterCurrentDay(dateStart: Date): boolean {
    const startDate = DateTime.fromJSDate(new Date(dateStart));
    const dateOfDay = DateTime.now();
    let flagIsDesabled = false;
    // 1. Ne pas modifier une demande inférieure à la date du jour - TODO à confirmer
    if (startDate < dateOfDay) {
      flagIsDesabled = true;
    }
    return flagIsDesabled;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
