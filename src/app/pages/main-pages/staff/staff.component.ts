import { Component, OnInit } from '@angular/core';
import {StaffwId} from "../../../../typescript-angular-client-generated";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.less']
})
export class StaffComponent implements OnInit {
  private staff: StaffwId;
  protected allCheckBoxes: boolean;
  date: string;
  fromTime: string;
  toTime: string;
  roomNumbers: string;
  selectedStaff: StaffwId;
  selectetStaffRooms: any;

  constructor() { }

  ngOnInit(): void {
  }

  edit(id: any) {

  }

  showShifts(id: any) {

  }

  submitStaff() {

  }

  submitShifts() {

  }

  toggleSelectedStaff(id: any) {

  }



  toggleSelectedShifts(id: any) {

  }

  selectAllStaffToggle() {

  }

  showAllStaff() {

  }

  deleteShift(selectedStaffId:number) {

  }

  deleteStaff(selectedStaffId:number) {

  }
}
