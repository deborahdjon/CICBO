import {Component, Input, OnInit} from '@angular/core';
import {Guest, GuestService, GuestwId} from "../../../typescript-angular-client-generated";
import {SearchObject} from "../../../typescript-angular-client-generated/model/searchObject";

@Component({
  selector: 'app-find-guests',
  templateUrl: './find-guests.component.html',
  styleUrls: ['./find-guests.component.less']
})
export class FindGuestsComponent implements OnInit {
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  guests: GuestwId[];

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.fromDate);
    console.log(this.toDate);

    const searchGuest:SearchObject = {
      "sortByName": true,
      "name": this.firstName
    }

    console.log(JSON.stringify(searchGuest));

    // this.guestService.findGuests(searchGuest).subscribe(res =>{
    //   console.log(res);
    // })

   this.guestService.listGuests().subscribe(res =>{
     this.guests = res;
     console.log(this.guests);
    });


  }

  onEdit(id:number){

  }

}
