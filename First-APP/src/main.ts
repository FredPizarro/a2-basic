import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; /* Necessities from @angular, and then call the bootstrap */
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';      /* Finally, we need to import our exported AppModule */

if (environment.production) {
  enableProdMode();
}
/*
* Note that how we’ve used ‘platform-browser-dynamic’ to target the
   browser platform.
 */
platformBrowserDynamic().bootstrapModule(AppModule);
 /* 
   platformBrowserDynamic() : function returns a few new methods on the
                              prototype chain that we can invoke, the one
                              we need is bootstrapModule
   bootstrapModule function : we import gets invoked, and we pass in the
                              AppComponent reference, of which is going to
                               be our “Root component”
 */
