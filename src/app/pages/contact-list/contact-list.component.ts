import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactListService} from "../../services/contact-list/contact-list.service";
import {
  GuestService,
  GuestwId, StaffService,
  StaffwId
} from "../../../typescript-angular-client-generated";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  public guests: GuestwId[] = [];
  public staff: StaffwId[] = [];

  @Input() allCheckBoxes: false;
  public shiftDate: string;

  constructor(private activatedRoute: ActivatedRoute,
              private contactListService:ContactListService) {}

  /**
   * Initialize guest and staff contact lists.
    */
  ngOnInit(): void {
   this.guests = this.contactListService.getGuests();
   this.staff = this.contactListService.getStaff();
    console.log(this.contactListService.getStaff());
    console.log(this.contactListService.getGuests());

  }

  //TODO Toggle staff und guest
}
