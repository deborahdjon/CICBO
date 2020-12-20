import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Guest, GuestService, Staff, StaffService} from '../../../typescript-angular-client-generated';
import {Router} from '@angular/router';
declare let $: any;


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.less']
})
export class NewStaffComponent{
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() date: string;
  @Input() phoneNumber: string;
  @Input() emailAddress: string;
  @Input() street: string;
  @Input() houseNumber: string;
  @Input() county: string;
  @Input() zipCode: number;
  @Input() city: string;
  @Input() country: string;
  modalContent;

  constructor(private staffService:StaffService) { }



  onSubmit():void {

    const address = this.street +' ' + this.houseNumber + ', ' + this.zipCode+ ' ' + this.county + ', ' + this.country;


    const staff:Staff = {
        "firstName": this.firstName,
        "name": this.lastName,
        "mail": this.emailAddress,
        "phone": this.phoneNumber,
        "address": address,
      }

      this.staffService.addStaff(staff).subscribe(res => {
        this.modalContent = res;
      });
    }
}


