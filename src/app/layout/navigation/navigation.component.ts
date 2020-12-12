import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],

})
export class NavigationComponent implements OnInit {
  @Output() hideNav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onHideNav() {
    this.hideNav.emit();
  }


}
