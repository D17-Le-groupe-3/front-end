import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";
import { LeavePlanningComponent } from './components/leave-planning/leave-planning.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'leaves/display', component: DisplayLeavesComponent },
  { path: 'leaves/planning', component: LeavePlanningComponent },
  { path: 'company-holiday', component: CompanyHolidayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
