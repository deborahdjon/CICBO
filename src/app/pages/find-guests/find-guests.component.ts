import {Component, Input, OnInit} from '@angular/core';
import {
  AlarmQueryObject,
  AlarmService,
  GuestService,
  GuestwId,
  StaffwId
} from "../../../typescript-angular-client-generated";
import {SearchObject} from "../../../typescript-angular-client-generated";

import {Router} from "@angular/router";
import {ContactListService} from "../../services/contact-list/contact-list.service";

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

  private guestContacts:GuestwId[] = [];
  private staffContacts:StaffwId[] = [];


  guests:GuestwId[];
  protected guestsMap:Map<number,GuestwId> = new Map;
  protected selectedGuests:Map<number,boolean> = new Map;
  public allCheckBoxes:boolean;



  constructor(private guestService: GuestService, private alarmService: AlarmService, public router:Router,  private contactListService:ContactListService) { }

  ngOnInit(): void {return}

  onSubmit(): void{

    const searchGuest:SearchObject = {
      "sortByName":true,
      "firstName":this.firstName,
      "name": this.lastName
    }

    this.guestService.findGuests(searchGuest).subscribe(res =>{
      this.guests = res;
      res.forEach(guest =>{
        this.guestsMap.set(guest.id, guest);
        this.selectedGuests.set(guest.id, false);
      });
    });
  }


  /**
   * Keeps track of the selection property of each guest
   * @param id guest ID.
   */
  toggleSelectedGuest(id:number): void{
    this.selectedGuests.set(id , !this.selectedGuests.get(id));
  }

  /**
   * Bulk selects/deselects all checkboxes when select-all button is clicked.
   */
  selectAllToggle(): void{
    this.allCheckBoxes = true;

    let flag = true;

    for (const value of Object.entries(this.selectedGuests).values()) {
        flag = value ? flag : false;
      }


    //Select all
    if (!flag){
      this.allCheckBoxes = true;
      Object.keys(this.selectedGuests).forEach( (key)=> {
        this.selectedGuests[key] = true;
      });

    //Deselect all
    }else{
      this.allCheckBoxes = false;
      Object.keys(this.selectedGuests).forEach( (key)=> {
        this.selectedGuests[key] = false;
      });
      }
    }


  /**
   * Returns a list of contacts of the infected person.
   */
  async getContacts(): Promise<void>{
    const alarmQueries:AlarmQueryObject[] = await this.createQueryObjects();
    await this.getContactList(alarmQueries);
    await this.contactListService.addContacts({staffMembers: this.staffContacts, guests:this.guestContacts})
    await this.router.navigateByUrl('notify/find-guest/contacts');
  }

  /**
   * Creates  query objects from selected guests.
   */
  createQueryObjects(): AlarmQueryObject[]{
    const alarmQueries:AlarmQueryObject[] = [];
    let alarmQuery:AlarmQueryObject;

    for (const [key, value] of this.selectedGuests) {
      if(value){
        alarmQuery = {
          "type": "guest",
          "sortByName": true ,
          "firstName": this.guestsMap.get(key).firstName,
          "name": this.guestsMap.get(key).name,
          "arrivedAt": this.guestsMap.get(key).arrivedAt,
          "leftAt": this.guestsMap.get(key).leftAt
        }
        alarmQueries.push(alarmQuery);
      }
    }
    return alarmQueries;
  }

  /**
   * Generates the contact list.
   * @param alarmQueries
   */
  getContactList(alarmQueries:AlarmQueryObject[]): void{
    alarmQueries.forEach(query=>{
      this.alarmService.createContactList(query).subscribe(res =>{
        this.guestContacts = this.guestContacts.concat(res.guests);
        this.staffContacts = this.staffContacts.concat(res.staffMembers);
      });
    });
  }

}
