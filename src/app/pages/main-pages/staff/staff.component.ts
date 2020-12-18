import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.less']
})
export class StaffComponent implements OnInit {
  staff: any;
  allCheckBoxes: any;
  date: any;
  fromTime: any;
  toTime: any;
  roomNumbers: any;
  selectedStaff: any;
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
