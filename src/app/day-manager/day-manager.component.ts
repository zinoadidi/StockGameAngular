import {Component, OnInit} from '@angular/core';
import {StockEventEmitterService} from '../shared/stock-event-emitter.service';

@Component({
  selector: 'app-day-manager',
  templateUrl: './day-manager.component.html',
  styleUrls: ['./day-manager.component.css']
})
export class DayManagerComponent implements OnInit {
  currentDay: number;
  currentDate: Date;

  constructor( private eventEmitterService: StockEventEmitterService ) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentDay = 1;
  }

  forwardTime(): void{
    const newDay: Date = this.currentDate;
    const nextDay: number = this.currentDate.getDate() + 1;
    newDay.setDate(nextDay);
    this.currentDay++;
    // Force date update in angular dorm
    this.currentDate = new Date(newDay);
    // trigger stock component update
    this.eventEmitterService.onDayChange();
  }
}
