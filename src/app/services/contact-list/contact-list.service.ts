import { Injectable } from '@angular/core';
import {ContactList, GuestwId, StaffwId} from '../../../typescript-angular-client-generated';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private contactsSource = new BehaviorSubject<ContactList>({guests:[], staffMembers:[]});
  public currentContacts = this.contactsSource.asObservable();


  addContacts(contacts: ContactList): boolean {
    this.contactsSource.next(contacts)
    return true;
  }
}
