import { Component } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: String = 'app works!';
    contacts:Contact[] = [{'firstname': 'John', 'lastname':'Doe'}, {'firstname': 'Johnette', 'lastname':'Doe'}];
}
