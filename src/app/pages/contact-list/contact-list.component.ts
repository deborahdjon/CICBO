import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ContactListService} from "../../services/contact-list/contact-list.service";
import {
  GuestwId,
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
              private contactListService:ContactListService,
              private router:Router) {
    router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        this.contactListService.currentContacts.subscribe(res=>{
          this.staff = res.staffMembers;
          this.guests = res.guests;

          console.log(res.staffMembers)
          console.log(res.guests)
        });
      }
    });


  }


  /**
   * Initialize guest and staff contact lists.
    */
  ngOnInit(): void {

  }


  //TODO Toggle staff und guest
}
