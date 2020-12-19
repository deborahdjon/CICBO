import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.less']
})
export class SmallButtonComponent {
  @Input() text: string;
  @Input() link: string;
  @Input() routingLink: string;
  @Input() type: string;
  @Input() form: string;
}
