import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyHolidayService } from 'src/app/services/company-holiday.service';
import { LeavesService } from 'src/app/services/leaves.service';
import { Calendar, CalendarOptions, DatesSetArg, FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { CompanyHoliday, Leave } from 'src/app/models';

@Component({
  selector: 'app-leave-planning',
  templateUrl: './leave-planning.component.html',
  styleUrls: ['./leave-planning.component.scss']
})
export class LeavePlanningComponent implements OnInit {

  @ViewChild(FullCalendarComponent) calendarComponent!: FullCalendarComponent;
  calendarApi!: Calendar;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locales: [frLocale],
    locale: 'fr',
    dayHeaderFormat: {
      weekday: 'long'
    },
    showNonCurrentDates: false,
    datesSet: (dateInfo: DatesSetArg) => {
      this.loadData(dateInfo.start.getMonth() + 1, dateInfo.start.getFullYear())
    }
  };

  constructor(private leaveService: LeavesService, private companyHolidayService: CompanyHolidayService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.calendarApi = this.calendarComponent.getApi();
    //this.loadData();
  }

  loadData(month: number, year: number): void {
    if (this.calendarApi)
      this.calendarApi.removeAllEvents();
    this.leaveService.getLeavesByEmployeeMonthAndYear(5, month, year).subscribe({
      next: (leaves: Leave[]) => {
        leaves.forEach(l => {
          l = new Leave(l.id,l.startDate,l.endDate,l.type,l.status,l.user);
          this.calendarApi.addEvent({
            id: l.id.toString(),
            title: l.type,
            start: l.startDate,
            end: l.endDate.setDate(l.endDate.getDate() + 1),
            allDay: true,
            color: 'blue'
          });

        });
      },
      error: (e) => console.log(e)
    });
    this.companyHolidayService.getByMonthAndYear('month', 'year').subscribe({
      next: (companyHoliday: CompanyHoliday[]) => {
        companyHoliday.forEach(ch => {
          this.calendarApi.addEvent({
            id: ch.id.toString(),
            title: ch.type.toString(),
            start: ch.date,
            allDay: true,
            color: 'green'
          });
        });
      },
      error: (e) => console.log(e)
    });
  }

}
