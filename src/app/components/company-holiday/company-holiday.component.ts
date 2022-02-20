import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompanyHoliday} from "../../models";
import {CompanyHolidayService} from "../../services/company-holiday.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-company-holiday',
  templateUrl: './company-holiday.component.html',
  styleUrls: ['./company-holiday.component.scss']
})
export class CompanyHolidayComponent implements OnInit, AfterViewInit {
  years = [ '2022', '2021', '2020', '2019'];
  selectedYear = new Date().getFullYear().toString();

  dataSource = new MatTableDataSource<CompanyHoliday>();
  displayedColumns: string[] = ['date', 'type', 'day', 'comment', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: CompanyHolidayService) { }

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

  delete(id: number) {

  }
}
