import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";
import { LeavePlanningComponent } from './components/leave-planning/leave-planning.component';
import { RequestComponent } from './components/request-leave/request-leave.component';
import { CreateCompanyHolidayComponent } from './components/create-company-holiday/create-company-holiday.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'leaves/display', component: DisplayLeavesComponent },
  { path: 'leaves/request', component: RequestComponent},
  { path: 'leaves/validate', component: LeaveValidationComponent},
  { path: 'leaves/planning', component: LeavePlanningComponent },
  { path: 'company-holiday', component: CompanyHolidayComponent},
  { path: 'company-holiday/create', component: CreateCompanyHolidayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
