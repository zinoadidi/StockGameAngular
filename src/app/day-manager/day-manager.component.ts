import {Component, OnInit} from '@angular/core';
import {StockEventEmitterService} from '../stocks/shared/stock-event-emitter.service';

@Component({
  selector: 'app-day-manager',
  templateUrl: './day-manager.component.html',
  styleUrls: ['./day-manager.component.css']
})
export class DayManagerComponent implements OnInit {
  currentDay: Date;

  constructor( private eventEmitterService: StockEventEmitterService ) { }

  ngOnInit(): void {
    this.currentDay = new Date();
  }

  forwardTime(): void{
    const newDay: Date = this.currentDay;
    const nextDay: number = this.currentDay.getDate() + 1;
    newDay.setDate(nextDay);

    // Force date update in angular dorm
    this.currentDay = new Date(newDay);
    // trigger stock component update
    this.eventEmitterService.onDayChange();
  }
}
