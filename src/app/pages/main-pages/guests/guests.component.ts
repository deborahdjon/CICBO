import {Component, Input, OnInit} from '@angular/core';
import {Guest, GuestService, GuestwId, SearchObject} from "../../../../typescript-angular-client-generated";
import {stringify} from "querystring";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.less']
})
export class GuestsComponent implements OnInit {
  //Find guest Form
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  // Edit guest form
  @Input() firstName2: string;
  @Input() lastName2: string;
  @Input() fromTime: string;
  @Input() toTime: string;
  @Input() date: string;
  @Input() roomNumber: number;
  @Input() phoneNumber: number;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: string;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() country: string;


  guests:GuestwId[];
  selectedGuestID:number;
  protected guestsMap:Map<number,GuestwId> = new Map;
  protected selectedGuests:Map<number,boolean> = new Map;
  public allCheckBoxes:boolean;


  constructor(private guestService:GuestService) { }

  ngOnInit(): void {return}


  onSubmitFind(): void{ //todo: sorted:boolean
    const searchObject: SearchObject = {
      "sortByName": true,
      "firstName": this.firstName,
      "name": this.lastName,
    }
    this.guestService.findGuests(searchObject).subscribe(res=>{
      this.guests = res;
      console.log(res)
      res.forEach(guest =>{
        this.guestsMap.set(guest.id, guest);
        this.selectedGuests.set(guest.id, false);
      });
    });
  }

  showAll(): void{
    this.guestService.listGuests().subscribe(res=>{
      this.guests = res;
      res.forEach(guest =>{
        this.guestsMap.set(guest.id, guest);
        this.selectedGuests.set(guest.id, false);
      });
    });
  }

  onEdit(guestId:number):void{
    this.selectedGuestID = guestId;
    this.guestService.getGuestById(guestId).subscribe(res =>{
      this.prefillEditForm(res);
    });
  }

  private prefillEditForm(guest:GuestwId){
    this.firstName2 = guest.firstName;
    this.lastName2 = guest.name;
    this.fromTime = guest.arrivedAt.split(' ')[1];
    this.toTime = guest.leftAt.split(' ')[1];
    this.date = guest.arrivedAt.split(' ')[0];
    this.roomNumber = guest.room.number;
    this.phoneNumber = parseInt(guest.phone);
    this.emailAddress = guest.mail;
    this.street = "test";
    this.houseNumber = stringify(1);
    this.county = "test";
    this.zipCode = 2;
    this.country = "chamany";
  }

  onSubmitEdit(guestId:number){
    const address = this.street +' ' + this.houseNumber + ', ' + this.zipCode+ ' ' + this.county + ', ' + this.country

    const guest:Guest = {
      "firstName": this.firstName2,
      "name": this.lastName2,
      "mail": this.emailAddress,
      "phone": stringify(this.phoneNumber),
      "address": address,
      "arrivedAt": this.date+' '+this.fromTime,
      "leftAt":  this.date+' '+this.toTime,
      "room": {
        "number": this.roomNumber
      }
    }
    this.guestService.updateGuestWithForm(guestId, guest).subscribe(res => {
      alert(res);
    });
  }

  /**
   * Keeps track of the selection property of each guest.
   * @param id guest ID.
   */
  toggleSelectedGuest(id:number): void{
    this.selectedGuests.set(id , !this.selectedGuests.get(id));
  }

  /**
   * Toggles all checkboxes on or off.
   */
  selectAllToggle(): void{
    let flag = true;
    for (const value of Object.entries(this.selectedGuests).values()) {
      flag = value ? flag : false;
    }


    //Select all
    if (!flag){
      //Frontend
      this.allCheckBoxes = true;

      //Backend
      Object.keys(this.selectedGuests).forEach( (key)=> {
        this.selectedGuests[key] = true;
      });

    //Deselect all
    }else{
      //Frontend
      this.allCheckBoxes = false;
      //Backend
      Object.keys(this.selectedGuests).forEach( (key)=> {
        this.selectedGuests[key] = false;
      });
    }
  }

  delete():void{
    let count = 0;
    const toDelete:number[] = [];
    for (const [key, value] of this.selectedGuests){
      if(value){
        count++;
        toDelete.push(key);
      }
    }

    if (confirm(`Do you want to delete ${count} guests?`)) {
      toDelete.forEach(id =>{
        this.guestService.deleteGuest(id).subscribe(res =>{
          console.log(res);
        });
      })
    } else {
      alert("Guests are not removed.");
    }
  }



}
