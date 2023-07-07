import { Component } from '@angular/core';
import { CounterService } from '../counter-service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private counterService: CounterService){}
counter=0;
onIncrement(){
  this.counter++;
}
onDecrement(){
 this.counter--;
}
onReset(){
this.counter=0;
}
}
