import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MenuButtonComponent } from './layout/menu-button/menu-button.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavElementComponent } from './layout/nav-element/nav-element.component';
import { SmallButtonComponent } from './layout/small-button/small-button.component';
import { ViewComponent } from './layout/view/view.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { HomeComponent } from './pages/main-pages/home/home.component';
import { GuestsComponent } from './pages/main-pages/guests/guests.component';
import { RoomsComponent } from './pages/main-pages/rooms/rooms.component';
import { AboutComponent } from './pages/main-pages/about/about.component';
import { LegalNoticeComponent } from './pages/main-pages/legal-notice/legal-notice.component';
import { RouterModule, Routes } from '@angular/router';
import { GdprComponent } from './pages/main-pages/gdpr/gdpr.component'
import { AppRoutingModule } from "./app-routing.module"; //TODO delete?
import { StaffComponent } from './pages/main-pages/staff/staff.component';
import { AlarmComponent } from './pages/main-pages/alarm/alarm.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { ContentFixedSizeComponent } from './layout/content-fixed-size/content-fixed-size.component';
import { NewGuestComponent } from './pages/new-guest/new-guest.component';
import { NewStaffComponent } from './pages/new-staff/new-staff.component';
import { NewRoomComponent } from './pages/new-room/new-room.component';
import { FindGuestsComponent } from './pages/find-guests/find-guests.component';
import { FindStaffComponent } from './pages/find-staff/find-staff.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { InspectEmployeeComponent } from './pages/inspect-employee/inspect-employee.component';
import { InspectGuestComponent } from './pages/inspect-guest/inspect-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MenuButtonComponent,
    MainContainerComponent,
    NavElementComponent,
    SmallButtonComponent,
    ViewComponent,
    PageHomeComponent,
    HomeComponent,
    GuestsComponent,
    RoomsComponent,
    AboutComponent,
    LegalNoticeComponent,
    GdprComponent,
    StaffComponent,
    AlarmComponent,
    PageContentComponent,
    ContentFixedSizeComponent,
    NewGuestComponent,
    NewStaffComponent,
    NewRoomComponent,
    FindGuestsComponent,
    FindStaffComponent,
    ContactListComponent,
    InspectEmployeeComponent,
    InspectGuestComponent,
  ],
  exports:[NavigationComponent],
  imports:[
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
