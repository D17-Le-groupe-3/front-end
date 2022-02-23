import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
//import interactionPlugin from '@fullcalendar/interaction';

import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {CompanyHolidayComponent} from './components/company-holiday/company-holiday.component';
import {HomeComponent} from './components/home/home.component';

import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import { LeaveTypePipe } from './pipes/leave-type.pipe';
import { LeaveStatusPipe } from './pipes/leave-status.pipe';
import {CompanyHolidayPipe} from './pipes/company-holiday.pipe';

import { LeavePlanningComponent } from './components/leave-planning/leave-planning.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
  //interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayLeavesComponent,
    LeaveTypePipe,
    LeaveStatusPipe,
    HeaderComponent,
    MenuComponent,
    CompanyHolidayComponent,
    CompanyHolidayPipe,
    LeavePlanningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
