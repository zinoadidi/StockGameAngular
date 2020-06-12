import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class StockEventEmitterService {

  updateStocksComponent: EventEmitter<any> = new EventEmitter();
  subscribe: Subscription;

  constructor() { }

  onDayChange(){
    this.updateStocksComponent.emit();
  }
}
