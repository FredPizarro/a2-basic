import { Component } from '@angular/core';
import { CounterComponent } from './Counter.Component';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
  /* no directives */
})
export class TemplateSyntaxComponent{

 /* Template Syntax */
  interpolation = 'String Interpolation';    /* {{ }} for interpolation. */
  public valueDefault: number = 1;

  onTrue(){
    return true;
  }

}
