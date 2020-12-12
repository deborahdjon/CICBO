import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.less']
})
export class NavElementComponent implements OnInit {
  @Input() link: string;
  @Input() text: string;
  @Output() hideNav: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.hideNav.emit();
  }

}
