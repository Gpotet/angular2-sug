import { Injectable } from '@angular/core';
import { Contact } from './Contact';

@Injectable()
export class ContactService {

  contacts:Contact[] = [{'firstname': 'John', 'lastname':'Doe'}, {'firstname': 'Johnette', 'lastname':'Doe'}];

  getContacts(): Contact[] {
    return this.contacts;
  }

  constructor() { }

}
