import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyHolidayService } from 'src/app/services/company-holiday.service';
import { LeavesService } from 'src/app/services/leaves.service';
import { CalendarOptions, EventApi, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { CompanyHoliday, Leave } from 'src/app/models';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-leave-planning',
  templateUrl: './leave-planning.component.html',
  styleUrls: ['./leave-planning.component.scss']
})
export class LeavePlanningComponent implements OnInit {

  @ViewChild(FullCalendarComponent) calendarComponent!: FullCalendarComponent;
  leaveEvents: EventInput[] = [];
  companyHolidayEvents: EventApi[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locales: [frLocale],
    locale: 'fr',
    dayHeaderFormat: {
      weekday: 'long'
    },
    eventSources:[
      {
        events: [{
        }
        ],
        color: 'blue'
      },
      {
        events: [
  
        ],
        color: 'black'
      }
    ]
  };

  constructor(private leaveService: LeavesService, private companyHolidayService: CompanyHolidayService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.loadData();
  }

  loadData(): void {
    let calendarApi = this.calendarComponent.getApi();
    this.leaveService.getLeavesByEmployee().subscribe({
      next: (leaves: Leave[]) => {
        leaves.forEach(l => {
          const endDate = new Date(l.endDate);
          calendarApi.addEvent({
            id: l.id.toString(),
            title: l.type,
            start: l.startDate,
            end: DateTime.fromISO(endDate.toISOString()).plus({days: 1}).toISODate(),
            color: 'blue'
          });

        });
      },
      error: (e) => console.log(e)
    });
    this.companyHolidayService.getByMonthAndYear('month', 'year').subscribe({
      next: (companyHoliday: CompanyHoliday[]) => {
        companyHoliday.forEach(ch => {
          calendarApi.addEvent({
            id: ch.id.toString(),
            title: ch.type.toString(),
            start: ch.date,
            color: 'green'
          });
        });
      },
      error: (e) => console.log(e)
    });
    //const test : EventInput[] = [{id: '1', title: 'Test', start: "2022-02-15", end: "2022-02-17"}, {id: '2', title: 'PAID_LEAVE', start: '2022-03-18', end: '2022-04-04'}];
    //this.calendarOptions.eventSources![0] = test;
    //this.calendarOptions.eventSources![0] = [{id: '1', title: 'Test', start: "2022-02-15", end: "2022-02-17"}, {id: '2', title: 'PAID_LEAVE', start: '2022-03-18', end: '2022-04-04'}];
    this.calendarOptions.eventSources![1] = [{id: '1', title: 'Jour férié', start: '2022-02-12', end: '2022-02-13'}];
  }

}
