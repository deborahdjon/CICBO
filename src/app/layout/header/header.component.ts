import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


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

    // trigger(
    //   'disappear', [
    //   transition(':leave',[
    //     style({ transform: 'translateX(0%)' }),
    //     animate('.3s', style({ transform: 'translateX(-100%)' }))
    //   ]),
    // ]),


   ]

})
export class HeaderComponent implements OnInit {
  @Output() hideNav: EventEmitter<any> = new EventEmitter();
  showNav: boolean = false;
  disappearNav: boolean = false;

  toggleNav(){
    this.showNav = !this.showNav;
    console.log("triggered");

  }

  onHideNav(){
    this.showNav = false;
    console.log("triggered");
    // if(this.showNav){
    //   this.disappearNav = true;
    //   this.disappearNav = false;
    // }
  }

  hideNavigation(){

  }

  ngOnInit(): void {

  }

}
