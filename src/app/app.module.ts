import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { ContactComponent } from './contact/contact.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule.forRoot(), 
    MdCardModule.forRoot(),
    MdInputModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
