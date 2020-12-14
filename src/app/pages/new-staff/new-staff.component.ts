import {Component, Input, OnInit} from '@angular/core';
import {Staff, StaffService} from "../../../typescript-angular-client-generated";

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.css']
})
export class NewStaffComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() date: string;
  @Input() phoneNumber: number;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: number;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() country: string;

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const staff:Staff = {
      "firstName": this.firstName,
      "name": this.lastName,
      "mail": this.emailAddress,
      "phone": this.phoneNumber.toString(),
      "address": "address",
    }

    this.staffService.addStaff(staff).subscribe(staff => console.log(staff));
  }



}
