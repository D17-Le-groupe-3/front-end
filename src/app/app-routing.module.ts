import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";
import { RequestComponent } from './components/request-leave/request-leave.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'leaves/display', component: DisplayLeavesComponent },
  { path: 'leaves/request', component: RequestComponent},
  { path: 'leaves/validate', component: LeaveValidationComponent},
  { path: 'company-holiday', component: CompanyHolidayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
