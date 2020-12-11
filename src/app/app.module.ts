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
import { HomeComponent } from './pages/home/home.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AboutComponent } from './pages/about/about.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { RouterModule, Routes } from '@angular/router';
import { GdprComponent } from './pages/gdpr/gdpr.component'
import {AppRoutingModule} from "./app-routing.module";
import { StaffComponent } from './pages/staff/staff.component';
import { AlarmComponent } from './pages/alarm/alarm.component';

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
    EmployeesComponent,
    RoomsComponent,
    AboutComponent,
    LegalNoticeComponent,
    GdprComponent,
    StaffComponent,
    AlarmComponent,
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
