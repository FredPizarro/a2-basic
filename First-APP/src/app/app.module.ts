import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';  /* component generate */
import { SearchComponent } from './components/navbar/search.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { CounterComponent } from './components/template-syntax/counter.component'; /* component generate */

/* decorator , Angular Modules help organize an application into cohesive blocks of functionality*/
@NgModule({
  declarations: [
    /* we can list the components, directives and pipes that are part of the module in the declarations array */
    AppComponent,
    NavbarComponent, /* component generate */
    SearchComponent, TemplateSyntaxComponent, CounterComponent  /* component generate */
  ],
  imports: [
    /* we can import other modules by listing them in the imports array */
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [/*we can list the services that are part of the module in the providers array, but read further on why this should only be used in some cases  */],
  bootstrap: [
    /* the bootstrap property is used, providing a list of components that should be used as bootstrap entry points for the application.   */
    AppComponent
  ]
})
 /* class  */
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

/* We use an Angular Module as the starting point for our applications. */