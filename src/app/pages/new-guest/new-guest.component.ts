import {Component, Input, OnInit} from '@angular/core';
import {GuestService} from "../../../typescript-angular-client-generated";

import { Guest } from "../../../typescript-angular-client-generated";
import { RoomIdentifier} from "../../../typescript-angular-client-generated";

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
  @Input() date: any; //TODO Date is missinng in API
  @Input() roomNumber: any;
  @Input() phoneNumber: any;
  @Input() emailAddress: any;
  @Input() street: any;
  @Input() houseNumber: any;
  @Input() county: any;
  @Input() zipCode: any;
  @Input() country: any;

  guest: Guest;

  constructor(private guestService:GuestService) {  }

  ngOnInit(): void {
  }


  onSubmit() {
    // const address = this.street +' ' + this.houseNumber.toString() + ', ' + this.zipCode.toString() + ' ' + this.county + ', ' + this.country

    const roomIdentifier = {
      number:10
    }
    const guest:Guest = {
      "firstName": "Jane",
      "name": "Doe",
      "mail": "jane.doe@example.com",
      "phone": "string",
      "address": "string",
      "arrivedAt": "2020-10-22 04:20",
      "leftAt": "2020-10-22 04:20",
      "room": {
        "number": 0
      }
    }


    // {
    //   firstName: "Jane",
    //     name: "Doe",
    //   mail: "jane.doe@example.com",
    //   phone: "string",
    //   address: "string",
    //   arrivedAt: "2020-10-22 04:20",
    //   leftAt: "2020-10-22 04:20",
    //   room: {
    //   number: 0
    // }
    //
    // }
      // const guest:Guest = {
    //   firstName: this.firstName,
    //   name: this.lastName,
    //   mail: this.emailAddress,
    //   phone: this.phoneNumber,
    //   address: address,
    //   arrivedAt: this.fromTime,
    //   leftAt: this.toTime,
    //   room: this.roomNumber,
    // }
    this.guestService.addGuest(guest).subscribe(data => console.log(data));

  }
}
