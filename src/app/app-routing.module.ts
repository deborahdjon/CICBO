import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AboutComponent } from './pages/about/about.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { StaffComponent} from "./pages/staff/staff.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'guests', component: GuestsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gdpr', component: GdprComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'staff', component: StaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
