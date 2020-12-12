import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/main-pages/home/home.component';
import { GuestsComponent } from './pages/main-pages/guests/guests.component';
import { RoomsComponent } from './pages/main-pages/rooms/rooms.component';
import { AboutComponent } from './pages/main-pages/about/about.component';
import { GdprComponent } from './pages/main-pages/gdpr/gdpr.component';
import { LegalNoticeComponent } from './pages/main-pages/legal-notice/legal-notice.component';
import { StaffComponent} from "./pages/main-pages/staff/staff.component";
import {AlarmComponent} from "./pages/main-pages/alarm/alarm.component";
import {NewGuestComponent} from "./pages/new-guest/new-guest.component";
import {NewStaffComponent} from "./pages/new-staff/new-staff.component";
import {NewRoomComponent} from "./pages/new-room/new-room.component";
import {FindGuestsComponent} from "./pages/find-guests/find-guests.component";
import {FindStaffComponent} from "./pages/find-staff/find-staff.component";


const routes: Routes = [
  // Navigation
  { path: '', component: HomeComponent },
  { path: 'alarm', component: AlarmComponent },
  { path: 'guests', component: GuestsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gdpr', component: GdprComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },

  { path: 'alarm/find-guest', component: FindGuestsComponent },
  { path: 'alarm/find-staff', component: FindStaffComponent},

  { path: 'new-guest', component: NewGuestComponent },
  { path: 'new-staff', component: NewStaffComponent, },
  { path: 'new-room', component: NewRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

