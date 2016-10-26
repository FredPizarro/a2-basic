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

/* 
* .../index.html               entry point of your application.

* .../inline.js                webpack loader
* .../style.[hash].bundle.js   the style
* .../main.[hash].bundle.js    
                               app bundled with required (depending on your app)
                               @angular/* dependencies declared in package.json,
                               "RxJS" dependency and "polyfill" dependencies
                               [ size: ~440 KB for new Angular CLI application empty,
                                ~100 KB compressed. For a medium size application the
                                compressed size is around 190 KB].
* .../[hash].bundle.map        the SourceMaps corresponding to the previous files
*/