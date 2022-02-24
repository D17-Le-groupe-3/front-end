import { RequestComponent } from './components/request-leave/request-leave.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DisplayLeavesComponent } from './components/display-leaves/display-leaves.component';
import {HomeComponent} from "./components/home/home.component";
import {CompanyHolidayComponent} from "./components/company-holiday/company-holiday.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'leaves/display', component: DisplayLeavesComponent },
  { path: 'request-leave', component: RequestComponent},
  { path: 'company-holiday', component: CompanyHolidayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
