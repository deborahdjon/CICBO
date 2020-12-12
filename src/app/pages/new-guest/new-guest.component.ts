import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.less']
})
export class NewGuestComponent implements OnInit {
  @Input() firstName: any;
  @Input() lastName: any;
  @Input() fromTime: any;
  @Input() toTime: any;
  @Input() date: any;
  @Input() roomNumber: any;
  @Input() phoneNumber: any;
  @Input() emailAddress: any;
  @Input() street: any;
  @Input() houseNumber: any;
  @Input() county: any;
  @Input() zipCode: any;
  @Input() country: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
