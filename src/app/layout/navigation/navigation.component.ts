import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],

})
export class NavigationComponent {
  @Output() hideNav: EventEmitter<void> = new EventEmitter();

  /**
   * Emits an event to the navigation, which will open or close accordingly.
   */
  onHideNav(): void {
    this.hideNav.emit();
  }


}
