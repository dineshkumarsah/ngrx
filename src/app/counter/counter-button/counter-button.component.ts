import { Component, EventEmitter, Output } from '@angular/core';
import { CounterService } from '../counter-service/counter.service';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  constructor(private counterService: CounterService){}
onReset() {
this.counterService.onReset();
}
onDecrement() {
this.counterService.onDecrement();
}
onIncrement() {
this.counterService.onIncrement();
}

}
