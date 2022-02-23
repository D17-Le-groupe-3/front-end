import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyHolidayService } from 'src/app/services/company-holiday.service';
import { LeavesService } from 'src/app/services/leaves.service';
import { CalendarOptions, EventApi, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Leave } from 'src/app/models';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-leave-planning',
  templateUrl: './leave-planning.component.html',
  styleUrls: ['./leave-planning.component.scss']
})
export class LeavePlanningComponent implements OnInit {

  //@ViewChild('calendar') calendarComponent: FullCalendarComponent;
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
        events: [
  
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
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData(): void {
    //let calendarApi = this.calendarComponent.getApi();
    this.leaveService.getLeavesByEmployee().subscribe({
      next: (leaves: Leave[]) => {
        /*leaves.forEach(l => {
          calendarApi.addEvent({
            id: l.id.toString(),
            title: l.type,
            start: l.startDate,
            end: (l.endDate.getDate() + 1)
          });
        });*/
        leaves.forEach(l =>{
          const endDate: Date = new Date(l.endDate);
          //endDate.setDate(endDate.getDate() + 1);
          //console.log(endDate);
          //console.log(endDate.toJSON());
          console.log(DateTime.fromISO(endDate.toISOString()).plus({days: 1}).toISODate());
          this.leaveEvents.push({
            id: l.id.toString(),
            title: l.type,
            start: l.startDate,
            end: DateTime.fromISO(endDate.toISOString()).plus({days: 1}).toISODate()
          })
        });
      },
      error: (e) => console.log(e)
    });
    console.log(this.leaveEvents);
    //this.companyHolidayService.getByMonthAndYear().subscribe();
    this.calendarOptions.eventSources![0] = this.leaveEvents;
    //this.calendarOptions.eventSources![0] = [{id: '1', title: 'Test', start: "2022-02-15", end: "2022-02-17"}, {id: '2', title: 'PAID_LEAVE', start: '2022-03-18', end: '2022-04-04'}];
    this.calendarOptions.eventSources![1] = [{id: '1', title: 'Jour férié', start: '2022-02-12', end: '2022-02-13'}];
  }

}
