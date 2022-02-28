import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayLeavesComponent} from './components/display-leaves/display-leaves.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";
import {LeavePlanningComponent} from './components/leave-planning/leave-planning.component';
import {RequestComponent} from './components/request-leave/request-leave.component';
import {LoginComponent} from "./components/login/login.component";
import {IsLoggedInGuard} from "./guards/is-logged-in.guard";
import {IsNotLoggedInGuard} from "./guards/is-not-logged-in.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsNotLoggedInGuard] },
  { path: 'leaves/display', component: DisplayLeavesComponent, canActivate: [IsLoggedInGuard] },
  { path: 'leaves/request', component: RequestComponent, canActivate: [IsLoggedInGuard] },
  { path: 'leaves/validate', component: LeaveValidationComponent, canActivate: [IsLoggedInGuard] },
  { path: 'leaves/planning', component: LeavePlanningComponent, canActivate: [IsLoggedInGuard] },
  { path: 'company-holiday', component: CompanyHolidayComponent, canActivate: [IsLoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
