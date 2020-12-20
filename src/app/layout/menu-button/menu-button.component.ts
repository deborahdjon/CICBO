import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.less']
})

/**
 * Big menu buttons.
 */
export class MenuButtonComponent  {
  @Input() text: string;
  @Input() imagePath: string;
  @Input() routingLink: string;
}
