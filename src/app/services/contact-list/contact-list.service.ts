import { Injectable } from '@angular/core';
import {GuestwId, StaffwId} from '../../../typescript-angular-client-generated';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  public guests: GuestwId[] = [];
  public staff: StaffwId[] = [];

  constructor() {return; }

  addContacts(guests: GuestwId[], staff: StaffwId[]): void {
    this.guests = guests;
    this.staff = staff;
    console.log(this.guests);
  }

  removeContacts(): void {
    this.guests = [];
    this.staff = [];
  }

  public getGuests(): GuestwId[] {
    return this.guests;
  }

  public getStaff(): StaffwId[] {
    return this.staff;
  }

}
