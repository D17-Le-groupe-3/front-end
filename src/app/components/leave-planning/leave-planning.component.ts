import { Component, OnInit } from '@angular/core';
import { CompanyHolidayService } from 'src/app/services/company-holiday.service';
import { LeavesService } from 'src/app/services/leaves.service';
import { CalendarOptions, EventApi } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Leave } from 'src/app/models';
//import allLocales from '@fullcalendar/core/locales-all';

@Component({
  selector: 'app-leave-planning',
  templateUrl: './leave-planning.component.html',
  styleUrls: ['./leave-planning.component.scss']
})
export class LeavePlanningComponent implements OnInit {

  leaveEvents: EventApi[] = [];
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
        color: 'green'
      }
    ]
  };

  constructor(private leaveService: LeavesService, private companyHolidayService: CompanyHolidayService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.leaveService.getLeavesByEmployeeMonthYear().subscribe((leave: Leave) => {
      
    });
    //this.companyHolidayService.getByMonthAndYear().subscribe();
    this.calendarOptions.eventSources[0] = this.leaveEvents;
  }

}
