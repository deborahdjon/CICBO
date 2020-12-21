import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.less']
})

export class NavElementComponent {
  @Input() link: string;
  @Input() text: string;
  @Output() hideNav: EventEmitter<void> = new EventEmitter();


  /**
   * Emits an event to the navigation, which will open or close accordingly.
   */
  onClick(): void{
    this.hideNav.emit();
  }

}
