import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Staff, StaffService} from "../../../typescript-angular-client-generated";
declare var $: any;


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.less']
})
export class NewStaffComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: string;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() country: string;
  myDiv: ElementRef<HTMLElement>;
  modalContent: string;
  $ : any;

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
  }

  onSubmit(){


    const staff:Staff = {
      "firstName": this.firstName,
      "name": this.lastName,
      "mail": this.emailAddress,
      "phone": this.phoneNumber,
      "address": "address",
    }

    this.staffService.addStaff(staff).subscribe(staff => console.log(staff));
  }





}
