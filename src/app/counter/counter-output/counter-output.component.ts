import { Component, Input } from '@angular/core';
import { CounterService } from '../counter-service/counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  constructor(public c : CounterService){}
counter:number=0

ngOninit(){
 this.counter = this.c.counter;
}
}
