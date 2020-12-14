import {Component, Input, OnInit} from '@angular/core';
import {Guest, GuestService, GuestwId, SearchObject} from "../../../../typescript-angular-client-generated/";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  @Input() firstName2: string;
  @Input() lastName2: string;
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


  guests:GuestwId[];
  guest:GuestwId

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const searchObject: SearchObject = {
      sortByName: false,
      firstName: this.firstName,
      name: this.lastName,

    }
    // this.guestService.findGuests(searchObject).subscribe(guests=>console.log(guests)); // TODO can't get guests

    this.guestService.listGuests().subscribe(guest => this.guests = guest);
    console.log(this.guests[0].address);
  }

  onEdit(guestId:number){

  }

}
