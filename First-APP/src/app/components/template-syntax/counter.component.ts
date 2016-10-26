import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <div class="container">
        <button class="btn" (click)="decrement();">    -    </button>
        <input type="text" class="input_numero" [value]="counterValue">
        <button class="btn" (click)="increment();">    +    </button>
      </div>
    </div> 
  `,
  styles: [ `
      .counter{ position: relative; }
      .container{ margin-bottom: 10px; margin-top: 10px;}
      .input_numero{ text-align: center; height: 30px; }
      .btn{ outline: 0; cursor: pointer; width: 30px; height: 30px; background: #03A9F4; color:#fff;
            border: 0; border-radius:3px;  
       }

  `],
  inputs: ['counterValue']
})
export class CounterComponent {
  @Input('conteo') counterValue = 0;

  increment(){ this.counterValue++; }
  decrement(){ this.counterValue--; }
}

