import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';  /* component generate */
import { SearchComponent } from './components/navbar/search.component'; /* component generate */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, /* component generate */
    SearchComponent  /* component generate */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
