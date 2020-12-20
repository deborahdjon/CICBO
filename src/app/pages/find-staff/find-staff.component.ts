import {Component, Input, OnInit} from '@angular/core';
import {
  AlarmQueryObject,
  AlarmService,
  ContactList,
  GuestwId,
  SearchObject,
  StaffService,
  StaffShift,
  StaffwId
} from '../../../typescript-angular-client-generated';
import {ContactListService} from '../../services/contact-list/contact-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-staff',
  templateUrl: './find-staff.component.html',
  styleUrls: ['./find-staff.component.less']
})
export class FindStaffComponent implements OnInit{

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  public staff: StaffwId[];
  public staffMap: Map<number, StaffwId> = new Map<number, StaffwId>();

  public selectedStaffMember: StaffwId;
  public selectedStaffMemberShifts: Map<number, StaffShift> = new Map<number, StaffShift>();
  public selectedStaffMemberShiftsIds:  Array<number> =[];
  public selectedStaffMemberShiftsChecked: Map<number, boolean> = new Map<number, boolean>();
  private selectAllShifts=false;


  public checks:boolean;

  constructor(private staffService:StaffService,
              private alarmService:AlarmService,
              private contactListService:ContactListService,
              private router:Router) {}

  /**
   * Initialize selected staff.
   */
  ngOnInit(): void {
    this.selectedStaffMember = {
      "id" : null,
      "firstName": "",
      "name": "",
      "mail": "",
      "phone": "",
      "address": "",
    }
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
   * Sends a request to the server that returns the the staff found then saves the response.
   */
  onSubmit(): void{
    try{
      this.staffService.findStaffMembers(this.determineSearchObject()).subscribe(res =>{
       if(res.length === 0){
         alert("No staff member found.")
       }else{
         this.staff = res;
         this.selectedStaffMember = res[0];
         this.staff.forEach(staff =>{
           this.staffMap.set(staff.id, staff);
         });
        }
      });
    }catch(e){
      alert(e.message);
    }
  }

  /**
   * Selects a staff and sets the
   * @param id Id of staff to select.
   */
  async selectStaff(id: number): Promise<void> {
    this.selectedStaffMember = this.staffMap.get(id);
    this.updateShifts();



  }

  updateShifts(): void{
    this.selectedStaffMemberShifts.clear();
    for(let i=0;i<this.selectedStaffMember.shifts.length; i++){
      const shift = this.selectedStaffMember.shifts[i];
      this.selectedStaffMemberShifts.set(i,shift);
    }
  }


  /**
   * Selects or deselects all shifts.
   */
  selectAllShiftsToggle(): void{
    if (this.selectAllShifts){
      this.selectAllShifts = false;
      this.checks = true;
      Object.keys(this.selectedStaffMemberShifts).forEach(key=>{
        this.selectedStaffMemberShifts[key]=true;
      })
    }else { //Deselect all
      this.selectAllShifts = true;
      this.checks = false;
      Object.keys(this.selectedStaffMemberShifts).forEach( (key)=> {
        this.selectedStaffMemberShifts[key] = false;
      });
    }
  }



  /**
   * Changes the background color of the row of the selected staff.
   * @param staffMemberId Id of staff member to select.
   */
  checkSelection(staffMemberId:number): string{
    if(staffMemberId === this.selectedStaffMember.id){
      return "marked-table-cell"
    }else{return "table-cell"}
  }


  /**
   * Toggles all shifts as selected or not
   * @param id
   */
  toggleSelectedShifts(id: number): void {
    const value = this.selectedStaffMemberShiftsChecked.get(id);
    this.selectedStaffMemberShiftsChecked.set(id,!value);
  }




  createQueryObjects(): AlarmQueryObject[]{
    const queries:AlarmQueryObject[] = [];


    const shiftsForQuery: StaffShift[] =[];
    for(const [key,value] of this.selectedStaffMemberShiftsChecked){
      if(value){shiftsForQuery.push(this.selectedStaffMemberShifts.get(key))}
    }

    shiftsForQuery.forEach(shift=>{
      const query:AlarmQueryObject={
        "type": "staff",
        "sortByName": true,
        "firstName": this.staffMap.get(this.selectedStaffMember.id).firstName,
        "name": this.staffMap.get(this.selectedStaffMember.id).name,
        "arrivedAt": shift.arrivedAt,
        "leftAt": shift.leftAt
      }
      queries.push(query);
    });

    return queries

  }

  /**
   * Returns a list of contacts of the infected person.
   */
  async getContactList(): Promise<void>{
    const contacts = await this.getContacts();
    console.log("contacts");
    console.log(contacts);
    const uniqueContacts = await this.uniqueContacts(contacts)
    console.log("uniqueContacts");
    console.log(uniqueContacts);
    const result = await this.contactListService.addContacts(uniqueContacts);
    console.log("result");
    console.log(result);
    this.contactListService.currentContacts.subscribe(r=>{
      console.log("current contact");
      console.log(r)});
    this.router.navigateByUrl('notify/find-staff/contacts');
  }


  async getContacts():Promise<ContactList>{
    //Promise.all
    const queryList:AlarmQueryObject[] = await this.createQueryObjects();
    let guestContacts:GuestwId[] = [];
    let staffContacts:StaffwId[] = [];

    for (const query of queryList){
      const res:ContactList = await this.alarmService.createContactList(query).toPromise()
      guestContacts = await guestContacts.concat(res.guests);
      staffContacts = await staffContacts.concat(res.staffMembers);
    }
    return {staffMembers: staffContacts, guests: guestContacts};
  }


  uniqueContacts(contacts:ContactList):ContactList{
    const uniqueStaffMap: Map<number,StaffwId> = new Map<number,StaffwId>();
    const uniqueGuestMap: Map<string, GuestwId> = new Map<string, GuestwId>();

    contacts.staffMembers.forEach(staff=>{
      uniqueStaffMap.set(staff.id, staff);
    });
    contacts.guests.forEach(guest=>{
      uniqueGuestMap.set(guest.mail, guest);
    })
    return {staffMembers: Array.from(uniqueStaffMap.values()), guests: Array.from(uniqueGuestMap.values())}
  }


}
