import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input()
  initial!: number;

  timeLeft : number = 0;
  interval;

  ngOnInit() {
    this.timeLeft = this.initial;
    this.interval = this.timeLeft;
    this.startTimer();
  }

  startTimer(){
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.stopTimer();
      }
    },1000)
  }

  stopTimer(){
    clearInterval(this.interval);
  }
}
