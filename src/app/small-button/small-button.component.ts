import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.less']
})
export class SmallButtonComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
