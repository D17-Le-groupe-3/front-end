import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";
import {LeaveValidationComponent} from "./components/leave-validation/leave-validation.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'company-holiday', component: CompanyHolidayComponent},
  { path: 'leaves/validate', component: LeaveValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
