import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Leave, LeaveStatus} from "../../models";
import {MatSort} from "@angular/material/sort";
import {LeavesService} from "../../services/leaves.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-leave-validation',
  templateUrl: './leave-validation.component.html',
  styleUrls: ['./leave-validation.component.scss']
})
export class LeaveValidationComponent implements OnInit, AfterViewInit {
  pendingValidationStatus = LeaveStatus.PENDING_VALIDATION;
  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 3000
  };

  dataSource = new MatTableDataSource<Leave>();
  displayedColumns: string[] = ['startDate', 'endDate', 'type', 'userFullName', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private service: LeavesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getData(): void {
    this.service.getToValidateByDepartment(this.userService.user!.department)
      .subscribe(leaves => this.dataSource.data = leaves);
  }

  validate(id: number) {
    this.service.validate(id)
      .subscribe(() => {
        this.snackBar.open('Demande validée', '', this.snackBarConfig)
        this.getData();
      })
  }

  reject(id: number) {
    this.service.reject(id)
      .subscribe(() => {
        this.snackBar.open('Demande rejetée', '', this.snackBarConfig)
        this.getData();
      })
  }
}
