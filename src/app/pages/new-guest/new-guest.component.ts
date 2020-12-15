import {Component, Input, OnInit} from '@angular/core';
import {GuestService, Room, RoomService} from "../../../typescript-angular-client-generated";

import { Guest } from "../../../typescript-angular-client-generated"

import {Router} from "@angular/router";

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.less']
})
export class NewGuestComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string; //TODO Remove these
  @Input() fromTime: string = "22:30";
  @Input() toTime: string = "23:30";
  @Input() date: string = "2020-12-10";
  @Input() roomNumber: string = "1";
  @Input() phoneNumber: string = "1";
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: string = "1";
  @Input() county: string;
  @Input() zipCode: string;
  @Input() country: string;

  guest: Guest;
  guests: Guest[];
  form;
  constructor(private guestService:GuestService, private router:Router) {  }

  ngOnInit(): void {
  }


  onSubmit() {

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


    this.guestService.addGuest(guest,"response").subscribe(res => {
      if(res.status === 201 && res.type ===4 ){
        alert(res.statusText);
      }else{
        alert("Something went wrong...")
      }
    });

  }
}
