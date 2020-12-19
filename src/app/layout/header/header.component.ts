import {Component, EventEmitter, Output} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations:[

    trigger(
      'navSlideInOut', [
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('.3s')
      ]),

      transition(':leave',[
        style({ transform: 'translateX(0%)' }),
        animate('.0s', style({ transform: 'translateX(-100%)' }))
      ]),
    ]),
   ]
})

export class HeaderComponent {
  @Output() hideNav: EventEmitter<void> = new EventEmitter();
  showNav = false;
  navigationClicked = false;

  /**
   * Ensures navigation is hidden when page is pages are routed to through the navigation.
   * @param router Ensures routing to the pages in the navigation.
   */
  constructor(private router:Router) {
    router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd && this.navigationClicked){
        this.showNav = !this.showNav;
        this.navigationClicked = false;
      }
    })
  }

  /**
   * Toggles the navigation to slide in and out when the button is pressed.
   */
  toggleNav(): void{
    this.showNav = !this.showNav;
  }

  /**
   * Ensures the Navigation hides when a navigation button was clicked.
   */
  onHideNav(): void{
    this.navigationClicked = true;
  }
}
