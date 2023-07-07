import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
counter=0
  constructor() { }
  onReset() {
    this.counter=0
  }
  onDecrement() {
   this.counter--;
  }
  onIncrement() {
    this.counter++;
  }
}
