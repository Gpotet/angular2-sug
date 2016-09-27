import { Component } from '@angular/core';
import { Contact } from './Contact';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {
    title: String = 'app works!';
    contacts:Contact[] = this.contactService.getContacts();

    constructor(private contactService: ContactService){}
}
