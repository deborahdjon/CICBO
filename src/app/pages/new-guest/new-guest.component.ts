import {Component, Input} from '@angular/core';
import {GuestService} from "../../../typescript-angular-client-generated";

import { Guest } from "../../../typescript-angular-client-generated"


@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.less']
})
export class NewGuestComponent {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() fromTime : string;
  @Input() toTime: string;
  @Input() date :string;
  @Input() roomNumber: string;
  @Input() phoneNumber:string;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber:string;
  @Input() county: string;
  @Input() zipCode: string;
  @Input() country: string;

  guest: Guest;
  guests: Guest[];
  form;
  constructor(private guestService:GuestService) {  }


  onSubmit():void {

    const address = this.street +' ' + this.houseNumber + ', ' + this.zipCode+ ' ' + this.county + ', ' + this.country


    const guest:Guest = {
      "firstName": this.firstName,
      "name": this.lastName,
      "mail": this.emailAddress,
      "phone": this.phoneNumber,
      "address": address,
      "arrivedAt": this.date+' '+this.fromTime,
      "leftAt":  this.date+' '+this.toTime,
      "room": {
        "number": parseInt(this.roomNumber)
      }
    }
    this.guestService.addGuest(guest).subscribe(res => {
      console.table(res);
     });
  }

}
