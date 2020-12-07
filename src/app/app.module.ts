import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavElementComponent } from './nav-element/nav-element.component';
import { SmallButtonComponent } from './small-button/small-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MenuButtonComponent,
    MainContainerComponent,
    NavElementComponent,
    SmallButtonComponent,
  ],
  exports:[NavigationComponent],
  imports:[
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
