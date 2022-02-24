import { EnumToArrayPipe } from './pipes/enum-request-leave-type.pipe';
import { RequestLeaveTypePipe } from './pipes/request-leave-type.pipe';
import { RequestComponent } from './components/request-leave/request-leave.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {CompanyHolidayComponent} from './components/company-holiday/company-holiday.component';
import {HomeComponent} from './components/home/home.component';

import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import { LeaveTypePipe } from './pipes/leave-type.pipe';
import { LeaveStatusPipe } from './pipes/leave-status.pipe';
import {CompanyHolidayPipe} from './pipes/company-holiday.pipe';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatLuxonDateModule, MAT_LUXON_DATE_ADAPTER_OPTIONS} from "@angular/material-luxon-adapter";

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
    RequestComponent,
    RequestLeaveTypePipe,
    EnumToArrayPipe
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
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatLuxonDateModule,
    MatSnackBarModule,


  ],
  providers: [
    {provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue:{useUtc: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
