import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from '@angular/material/dialog';

import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {
  CompanyHolidayComponent,
  DialogCompanyHolidayDelete
} from './components/company-holiday/company-holiday.component';
import {HomeComponent} from './components/home/home.component';
import {DisplayLeavesComponent} from './components/display-leaves/display-leaves.component';
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";
import {LeaveCountersComponent} from './components/leave-counters/leave-counters.component';

import {LeaveTypePipe} from './pipes/leave-type.pipe';
import {LeaveStatusPipe} from './pipes/leave-status.pipe';
import {CompanyHolidayPipe} from './pipes/company-holiday.pipe';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MAT_LUXON_DATE_ADAPTER_OPTIONS, MatLuxonDateModule} from '@angular/material-luxon-adapter';
import {MatTooltipModule} from "@angular/material/tooltip";


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
    DialogCompanyHolidayDelete,
    CompanyHolidayPipe,
    LeaveValidationComponent,
    LeaveCountersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSortModule,
    MatSelectModule,
    MatLuxonDateModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    {provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue:{useUtc: true}}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
