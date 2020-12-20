import { Injectable } from '@angular/core';
import {GuestwId, StaffwId} from "../../../typescript-angular-client-generated";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private guestsSource = new BehaviorSubject<GuestwId[]>([]);
  public currentGuests = this.guestsSource.asObservable();
  private staffSource = new BehaviorSubject<StaffwId[]>([]);
  public currentStaff = this.staffSource.asObservable();

  addContacts(guests: GuestwId[], staff: StaffwId[]): void {
    this.guestsSource.next(guests);
    this.staffSource.next(staff);
  }
}
