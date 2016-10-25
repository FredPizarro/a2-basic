import { Component } from '@angular/core';

@Component({
/*moduleId: module.id, */    /* Looks like if your using "module": "es6" in tsconfig.json, you dont have to use this :) */
  selector: 'app-root', /* <app-root> */
  templateUrl: './app.component.html', /* .html */
/*template: '<h1> HTML is the language of the Angular template. </h1>', */ 
  styleUrls: ['./app.component.css'] /*.css */
/*styles: [ ' h1{ Code CSS } ' ] */  
})
export class AppComponent {
  title = 'SkyRider: Fred Pizarro';
}
