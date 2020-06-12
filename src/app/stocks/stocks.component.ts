import {Component, OnInit} from '@angular/core';
import {Stock} from '../shared/stock.model';
import {StocksService} from '../shared/stocks.service';
import {StockEventEmitterService} from '../shared/stock-event-emitter.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  currentStocks: Stock[];

  constructor(
    private stocksService: StocksService,
    private eventEmitterService: StockEventEmitterService
  ) {}

  ngOnInit(): void {
    // load initial stocks
    this.getStocks();
    // subscribe to event emitter to allow stock updates from day component
    const stockEventEmitter = this.eventEmitterService;
    stockEventEmitter.subscribe = stockEventEmitter.updateStocksComponent.subscribe(() => {
      this.updateLocalStocks(StocksService.updateStockPrices(this.currentStocks));
    });
  }

  private getStocks(): void {
    this.stocksService.getStocks()
      .subscribe(stocks => this.currentStocks = stocks);
  }
  private updateLocalStocks(newStocks: Stock[]): void{
    this.currentStocks = newStocks;
  }

  calculatePercentage(initialPrice: number, newPrice: number): number{
    const priceDifference = Math.abs(this.calculatePriceDifference(initialPrice, newPrice));
    const percentage = (priceDifference / initialPrice) * 100;
    return Number(percentage.toFixed(2));
  }

  calculatePriceDifference(initialPrice: number, newPrice: number): number {
    return newPrice - initialPrice;
  }
}
