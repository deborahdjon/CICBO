import {Component, Input} from '@angular/core';
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

/**
 * Contains all the potential contacts of the previous pages selection.
 */
export class ContactListComponent {
  public guests: GuestwId[] = [];
  public staff: StaffwId[] = [];

  @Input() allCheckBoxes: false;
  public shiftDate: string;

  /**
   * Incorporates the Services required by the class.
   * @param activatedRoute
   * @param contactListService Stores contacts provided from previous page.
   * @param router Router.
   */
  constructor(private activatedRoute: ActivatedRoute,
              private contactListService:ContactListService,
              private router:Router) {
    router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        this.contactListService.currentContacts.subscribe(res=>{
          this.staff = res.staffMembers;
          this.guests = res.guests;
        });
      }
    });
  }
}
