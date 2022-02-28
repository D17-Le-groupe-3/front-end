import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CompanyHoliday, CompanyHolidayType, LeaveStatus, Role} from "../../models";
import {CompanyHolidayService} from "../../services/company-holiday.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {DateTime} from "luxon";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-company-holiday',
  templateUrl: './company-holiday.component.html',
  styleUrls: ['./company-holiday.component.scss']
})
export class CompanyHolidayComponent implements OnInit, AfterViewInit {
  role: Role | null = null;
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
  displayedColumns: string[] = ['date', 'type', 'day', 'comment'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private service: CompanyHolidayService, public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {
    this.role = this.userService.user!.role;
    if (this.role == Role.ADMINISTRATOR)
      this.displayedColumns.push('actions');
  }

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

  /**
   * Méthode appelée lors du click sur le bouton supprimer.
   * Affiche une demande de confirmation puis envoie une requête delete au back-end via le service.
   * Si une réponse Ok est reçu du back-end, affiche une confirmation de suppression puis rafraichit
   * les données du tableau.
   *
   * @param holiday le jour férié/RTT employeur à supprimer
   */
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

  /**
   * Méthode utilisée pour désactiver le bouton supprimer.
   * Vérifie les règles métier(date, type et statut).
   *
   * @param holiday le jour férié/RTT employeur à tester
   */
  isDisabled(holiday: CompanyHoliday) {
    return DateTime.fromJSDate(new Date(holiday.date)) < DateTime.now()
      || (holiday.type == CompanyHolidayType.COMPANY_RTT && holiday.status == LeaveStatus.VALIDATED);
  }

  createCompanyHoliday(){
    this.router.navigate(['company-holiday/create'])
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
