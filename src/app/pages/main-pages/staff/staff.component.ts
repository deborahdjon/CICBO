import {Component, Input, OnInit} from '@angular/core';
import {
  RoomIdentifier,
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
  public staffMap: Map<number, StaffwId> = new Map<number, StaffwId>();

  //public selectedStaff: Map<number, boolean> = new Map<number, boolean>();

  public selectedStaffMember: StaffwId;
  public selectedStaffMemberShifts: Map<number, StaffShift> = new Map<number, StaffShift>();
  public selectedStaffMemberShiftsChecked: Map<number, boolean> = new Map<number, boolean>();
  private selectAllShifts=false;
  public checks: boolean;

  private lastFetchMethod:string;
  private lastSearch:SearchObject;
  // Find staff form
  @Input() firstName: string;
  @Input() lastName: string;

  // Shifts
  @Input() date: string;
  @Input() fromTime: string;
  @Input() toTime: string;
  @Input() roomNumbersShift: string;
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

//TODO for toggle select all

  // protected selectAll = true;
  // protected selectedStaff:Map<number, StaffwId> = new Map;
  // protected toggleAfterSelectAll = false;
  // public checks:boolean;


  /**
   * Create service instances.
   * @param staffService
   */
  constructor(private staffService:StaffService) { }

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
   * Update selected staff member.
   * @param id
   */
  onEdit(id: number): void {
    this.staffService.getStaffMemberById(id).subscribe(res =>{
      this.selectedStaffMember = res;
      this.prefillEditForm(res);
    })
  }

  /**
   * Prefills the edit staff form.
   * @param staff: staff that contains updated data.
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

  /**
   * Submit an update of a staff member.
   * @param staffId
   */
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



  /**
   * Sets the list of displayed staff to all staff currently in the database.
   */
  showAllStaff(): void {
    this.lastFetchMethod="get all";
    this.staffService.listStaff().subscribe(res =>{
      this.staff = res;
      this.selectedStaffMember = res[0];
      this.staff.forEach(staff =>{
        // this.selectedStaff.set(staff.id, false);
        this.staffMap.set(staff.id, staff);
      });
    })
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
    this.lastSearch=searchStaff;
    return searchStaff;
  }

  /**
   * Finds populates the list of currently viewed staff to all staff found in the search.
   */
  findStaff(triggeredBySubmit:boolean): void {
    this.lastFetchMethod="find";
    let searchObject:SearchObject;
    if(triggeredBySubmit){
      searchObject = this.determineSearchObject();
    }else{
      searchObject = this.lastSearch;
    }

    try{
      this.staffService.findStaffMembers(searchObject).subscribe(res=>{
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
  selectStaff(id: number): void {
    this.selectedStaffMember = this.staffMap.get(id);
    this.updateShifts();
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
   * Delete staff member.
   */
  async deleteStaff(): Promise<void> {
    await this.staffService.deleteStaffMember(this.selectedStaffMember.id).subscribe(data=>{
      console.log(data);
    });
    await this.reloadStaff();

  }





  updateShifts(): void{
      this.selectedStaffMemberShifts.clear();
      for(let i=0;i<this.selectedStaffMember.shifts.length; i++){
        const shift = this.selectedStaffMember.shifts[i];
        this.selectedStaffMemberShifts.set(i,shift);
        console.log(this.selectedStaffMemberShifts)
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
   * Converts the rooms in a shift to a string.
   * @param shift
   * @return string representation of rooms in the shift.
   */
  getShiftRooms(shift:StaffShift): string{
    let rooms = "";
    shift.rooms.forEach(room =>{
      rooms = rooms + ", " + stringify(room.number);
    })
    return rooms
  }

  // /**
  //  * Populates the shifts table with shifts of the selected staff member.
  //  * @param id Id of selected staff.
  //  */
  // showShifts(id: number): void{
  //   this.selectedStaffMember = this.staffMap.get(id);
  // }

  /**
   * Adds a shift to the selected staff member.
   */
  submitShift(): void {
    const rooms:RoomIdentifier[] = [];
    const roomNumbersStrings: string[]= this.roomNumbersShift.split(',');
    try{
      roomNumbersStrings.forEach(num =>{
        const roomId:RoomIdentifier ={
          "number": parseInt(num),
        }
        rooms.push(roomId)
      })
    }catch (e){
      alert("Please enter the room numbers in the format: number1,number2,...")
    }

    const shift:StaffShift = {
      "arrivedAt": this.date+' '+this.fromTime,
      "leftAt": this.date+' '+this.toTime,
      "rooms": rooms
    }
    try{
      this.staffService.addShift(this.selectedStaffMember.id, shift).subscribe(res=>{
        console.log(res)}, error => {alert(error.message)});
    }catch (e){
      alert(e);
    }


  }


  /**
   * Toggles all shifts as selected or not
   * @param id
   */
  toggleSelectedShifts(id: number): void {
    const value = this.selectedStaffMemberShiftsChecked.get(id);
    this.selectedStaffMemberShiftsChecked.set(id,!value);
  }

  /**
   * Delets all selected shifts from selected staff member.
   */
  deleteShift(): void {
    const newShifts: StaffShift[] =[];
    for(const [key,value] of this.selectedStaffMemberShiftsChecked){
      if(!value){newShifts.push(this.selectedStaffMemberShifts.get(key))}
    }
    this.staffService.replaceShift(this.selectedStaffMember.id, newShifts).subscribe(res=>{
      console.log(res)
    });
    this.updateShifts();
  }

  /**
   * Fetches updated version of staff.
   * @private
   */
  private reloadStaff(){
    if(this.lastFetchMethod==="get all"){
      this.showAllStaff()
    }else{
      this.findStaff(false);
    }
    this.selectStaff(this.selectedStaffMember.id);
  }

}
