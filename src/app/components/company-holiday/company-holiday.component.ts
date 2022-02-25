import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CompanyHoliday, CompanyHolidayType, LeaveStatus} from "../../models";
import {CompanyHolidayService} from "../../services/company-holiday.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {DateTime} from "luxon";

@Component({
  selector: 'app-company-holiday',
  templateUrl: './company-holiday.component.html',
  styleUrls: ['./company-holiday.component.scss']
})
export class CompanyHolidayComponent implements OnInit, AfterViewInit {
  LeaveStatus = LeaveStatus;
  CompanyHolidayType = CompanyHolidayType;
  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 3000
  };

  years = [ '2022', '2021', '2020', '2019'];
  selectedYear = new Date().getFullYear().toString();

  dataSource = new MatTableDataSource<CompanyHoliday>();
  displayedColumns: string[] = ['date', 'type', 'day', 'comment', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: CompanyHolidayService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getData(): void {
    this.service.getByYear(this.selectedYear)
      .subscribe(holidays => this.dataSource.data = holidays);
  }

  onYearChange(year: string) {
    this.selectedYear = year;
    this.getData();
  }

  edit(id: number) {

  }

  delete(holiday: CompanyHoliday) {
    const dialogRef = this.dialog.open(DialogCompanyHolidayDelete, {
      data: holiday
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed)
        this.service.delete(holiday.id)
          .subscribe(() => {
            this.snackBar.open('Suppression effectuée', '', this.snackBarConfig)
            this.getData();
          });
    });
  }

  isDisabled(holiday: CompanyHoliday) {
    return DateTime.fromJSDate(new Date(holiday.date)) < DateTime.now()
      || (holiday.type == CompanyHolidayType.COMPANY_RTT && holiday.status == LeaveStatus.VALIDATED);
  }
}

@Component({
  selector: 'dialog-company-holiday-delete',
  templateUrl: 'dialog-company-holiday-delete.html'
})
export class DialogCompanyHolidayDelete {
  CompanyHolidayType = CompanyHolidayType;

  constructor(@Inject(MAT_DIALOG_DATA) public holiday: CompanyHoliday) {}
}
