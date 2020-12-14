import {Component, Input, OnInit} from '@angular/core';
import {GuestService, Room, RoomService} from "../../../typescript-angular-client-generated";

import { Guest } from "../../../typescript-angular-client-generated";
import { RoomIdentifier} from "../../../typescript-angular-client-generated";
import {SearchObject} from "../../models/searchObject";

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.less']
})
export class NewGuestComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() fromTime: string;
  @Input() toTime: string;
  @Input() date: string;
  @Input() roomNumber: number;
  @Input() phoneNumber: number;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: number;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() country: string;

  guest: Guest;
  guests: Guest[];

  constructor(private guestService:GuestService, private roomService:RoomService) {  }

  ngOnInit(): void {
  }


  onSubmit() {
    // const address = this.street +' ' + this.houseNumber.toString() + ', ' + this.zipCode.toString() + ' ' + this.county + ', ' + this.country


    // const guest:Guest = {
    //   "firstName": this.firstName,
    //   "name": this.lastName,
    //   "mail": this.emailAddress,
    //   "phone": this.phoneNumber.toString(),
    //   "address": "address",
    //   "arrivedAt": "2020-10-22 04:20",
    //   "leftAt": "2020-10-22 04:20",
    //   "room": {
    //     "number": this.roomNumber
    //   }
    // }

    // "arrivedAt": this.date.toString()+' '+this.fromTime.toString(),
    // "leftAt":  this.date.toString()+' '+this.toTime.toString(),





    // constguest:Guest = {
    //   "firstName": "Jane",
    //   "name": "Doe",
    //   "mail": "jane.doe@example.com",
    //   "phone": "string",
    //   "address": "string",
    //   "arrivedAt": "2020-10-22 04:20",
    //   "leftAt": "2020-10-22 04:20",
    //   "room": {
    //   "number": 1
    //   }
    // }
    //console.log(JSON.stringify(guest));

    const searchGuest:SearchObject = {
      sortByName:true,
      firstName:"Jane"
    }

    console.log(JSON.stringify(searchGuest))
    // this.guestService.addGuest(guest,'response').subscribe(res => {console.log(res)});
    this.guestService.findGuests(searchGuest).subscribe();

    //alert("Guest was added.")
    //
  }
}
