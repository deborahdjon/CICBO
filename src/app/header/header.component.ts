import { Component, OnInit} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations:[
    trigger('slideInOut', [

      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('.3s')
      ]),

      transition(':leave',[
        style({ transform: 'translateX(0%)' }),
        animate('.3s', style({ transform: 'translateX(-100%)' }))
      ]),

    ])
   ]

})
export class HeaderComponent implements OnInit {

  showNav: boolean = false;
  toggleNav(){
    this.showNav = !this.showNav;
  }


  ngOnInit(): void {

  }

}
