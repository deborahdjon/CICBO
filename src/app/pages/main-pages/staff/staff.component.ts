import {Component, Input, OnInit} from '@angular/core';
import {
  SearchObject,
  Staff,
  StaffService, StaffShift,
  StaffwId
} from "../../../../typescript-angular-client-generated";
import {stringify} from "querystring";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.less']
})
export class StaffComponent implements OnInit {
  public staff:StaffwId[];
  public staffMap: Map<number, StaffwId>
  public selectedStaff: Map<number, boolean>

  public selectedStaffMember: StaffwId;

  public checks: boolean;
  // Find staff form
  @Input() firstName: any;
  @Input() lastName: any;

  // Shifts
  @Input() date: string;
  @Input() fromTime: string;
  @Input() toTime: string;
  @Input() roomNumbers: string;
  @Input() selectedStaffRooms: string;

  // Edit staff form
  @Input() firstName2: string;
  @Input() lastName2: string;
  @Input() roomNumber: number;
  @Input() phoneNumber: number;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: number;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() country: string;
  @Input() streetNo: string;

  // @Input() fromTime2: string;
  // @Input() toTime2: string;
  // @Input() date2: string;
  //

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
  }

  onEdit(id: number): void {
    this.staffService.getStaffMemberById(id).subscribe(res =>{
      this.selectedStaffMember = res;
      this.prefillEditForm(res);
    })
  }

  /**
   * Prefills the edit staff form.
   * @param staff
   * @private
   */
  private prefillEditForm(staff:StaffwId){
    this.firstName2 = staff.firstName;
    this.lastName2 = staff.name;
    this.phoneNumber = parseInt(staff.phone);
    this.emailAddress = staff.mail;
    this.street = "test";
    this.houseNumber = stringify(1);
    this.county = "test";
    this.zipCode = 2;
    this.country = "chamany";
  }

  onSubmitEdit(staffId:number):void{
    const address = this.street +' ' + this.houseNumber + ', ' + this.zipCode+ ' ' + this.county + ', ' + this.country

    const staff:Staff = {
      "firstName": this.firstName2,
      "name": this.lastName2,
      "mail": this.emailAddress,
      "phone": stringify(this.phoneNumber),
      "address": address,
    }
    try{
      this.staffService.updateStaff(staffId, staff).subscribe(res => {
        alert(res);
      });
    }catch(e){
      console.log(e.message);
    }
  }

  showAllStaff(): void {
    this.staffService.listStaff().subscribe(res =>{
      this.staff = res;
    })
  }

  onSubmitFind(): void {
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

    try{
      this.staffService.findStaffMembers(searchStaff).subscribe(res=>{
        this.staff = res;
        this.selectedStaffMember = res[0];
        this.staff.forEach(staff =>{
          this.selectedStaff.set(staff.id, false);
          this.staffMap.set(staff.id, staff);
        });
      });
    }catch(e){
      alert(e.message);
    }

  }

  toggleSelectedShift(id: any): void {
    this.selectedStaff.set(id, !this.selectedStaff.get(id));
  }

  selectAllStaffToggle(): void{
    let flag = true;
    for (const value of Object.entries(this.selectedStaff).values()) {
      flag = value ? flag : false;
    }

    //Select all
    if (!flag){
      //Frontend
      this.checks = true;

      //Backend
      Object.keys(this.selectedStaff).forEach( (key)=> {
        this.selectedStaff.set(parseInt(key),true);
      });

      //Deselect all
    }else{
      //Frontend
      this.checks = false;
      //Backend
      Object.keys(this.selectedStaff).forEach( (key)=> {
        this.selectedStaff.set(parseInt(key),false);
      });
    }
  }


  getShiftRooms(shift:StaffShift): string{
    let rooms = "";
    shift.rooms.forEach(room =>{
      rooms = rooms + ", " + stringify(room.number);
    })
    return rooms
  }

  shoowShifts(id: number){
    this.selectedStaffMember = this.staffMap.get(id);
  }

  submitShifts(): void {

  }




  toggleSelectedShifts(id: any): void {

  }

  deleteShift(selectedStaffId:number): void {

  }

  deleteStaff(): void {

  }


  selectAllShiftsToggle() {

  }
}
