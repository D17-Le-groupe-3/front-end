import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_LUXON_DATE_ADAPTER_OPTIONS, MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from "@angular/material/tooltip";
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from './components/home/home.component';
import {CompanyHolidayComponent, DialogCompanyHolidayDelete} from './components/company-holiday/company-holiday.component';
import {DisplayLeavesComponent} from './components/display-leaves/display-leaves.component';
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";
import {LeaveCountersComponent} from './components/leave-counters/leave-counters.component';
import {RequestComponent} from './components/request-leave/request-leave.component';
import { DialogLeaveDelete } from './components/display-leaves/display-leaves.component';
import { CreateCompanyHolidayComponent } from './components/create-company-holiday/create-company-holiday.component';
import { LeavePlanningComponent } from './components/leave-planning/leave-planning.component';

import { LeaveTypePipe } from './pipes/leave-type.pipe';
import { LeaveStatusPipe } from './pipes/leave-status.pipe';
import {CompanyHolidayPipe} from './pipes/company-holiday.pipe';
import {EnumToArrayPipe} from './pipes/enum-request-leave-type.pipe';
import {RequestLeaveTypePipe} from './pipes/request-leave-type.pipe';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DisplayLeavesComponent,
    LeaveTypePipe,
    LeaveStatusPipe,
    HeaderComponent,
    MenuComponent,
    CompanyHolidayComponent,
    DialogCompanyHolidayDelete,
    CompanyHolidayPipe,
    RequestComponent,
    RequestLeaveTypePipe,
    EnumToArrayPipe,
    LeaveValidationComponent,
    DialogLeaveDelete,
    LeavePlanningComponent,
    LeaveCountersComponent,
    CreateCompanyHolidayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatLuxonDateModule,
    MatSnackBarModule,
    FullCalendarModule
  ],
  providers: [
    LeaveTypePipe,
    CompanyHolidayPipe,
    {provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue:{useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
