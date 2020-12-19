import {Component, Input, OnInit} from '@angular/core';
import {
  AlarmQueryObject,
  AlarmService,
  StaffService,
  StaffwId,
  SearchObject
} from "../../../typescript-angular-client-generated";
@Component({
  selector: 'app-find-staff',
  templateUrl: './find-staff.component.html',
  styleUrls: ['./find-staff.component.css']
})
export class FindStaffComponent implements OnInit {
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  staff: StaffwId[];
  protected selectedStaff:Map<number, StaffwId> = new Map;
  protected selectAll = true;
  protected toggleAfterSelectAll = false;
  public checks:boolean;

  constructor(private staffService:StaffService, private alarmService:AlarmService) {}

  ngOnInit(): void {
  }

  /**
   *
   */
  onSubmit(): void{

    const searchStaff:SearchObject = {
      "sortByName":true,
      "firstName":"Jane"
    }

    this.staffService.findStaffMembers(searchStaff).subscribe(res =>{
      this.staff = res;
    });

  }

  /**
   * Set the values of the search object.
   * @private
   */
  private determineSearchObject(): SearchObject{
    let searchStaff:SearchObject;
    if(!(this.firstName || this.lastName)){
      alert("Please enter a name");
    }else{
      if(this.firstName && this.lastName){
        searchStaff = {
          "sortByName":true,
          "firstName":this.firstName,
          "name": this.lastName
        }
      }else{
        if(this.firstName){
          searchStaff = {
            "sortByName":true,
            "firstName":this.firstName,
          }
        }else{
          searchStaff = {
            "sortByName":true,
            "name":this.lastName,
          }
        }
      }
    }
    return searchStaff;
  }




  /**
   * Keeps track of the selection property of each guest
   * @param id guest ID.
   */
  toggleSelectedStaff(id:number){
    this.selectedStaff[id] = !this.selectedStaff[id];
    if(!this.selectedStaff[id]){
      this.selectAll = true; // Ensure toggle deselect all
    }

  }

  selectAllToggle(): void{
    //Select all
    if (this.selectAll){
      this.selectAll = false;
      this.checks = true;
      Object.keys(this.selectedStaff).forEach( (key)=> {
        this.selectedStaff[key] = true;
      });

    } else {if(!this.selectAll && !this.toggleAfterSelectAll){ //Deselect all
      this.selectAll = true;
      this.checks = false;
      Object.keys(this.selectedStaff).forEach( (key)=> {
        this.selectedStaff[key] = false;
      });
    }

    }

  }


  /**
   * Returns a list of contacts of the infected person.
   */
  getContacts(){
    // this.guestService.getGuestById(id).subscribe(res =>{
    //   const guest:GuestwId = res;
    //   console.log(guest);
    // })

    const alarmQuery:AlarmQueryObject={
      "type": "guest" ,
      "sortByName": true ,
      "firstName": "Jane",
      "name": "Doe",
      "arrivedAt": '',
      "leftAt": ''
    }

    // this.alarmService.createContactList(alarmQuery).subscribe(res =>{ TODO make search and create contact list work
    //   console.log(res);
    // })
  }
}
