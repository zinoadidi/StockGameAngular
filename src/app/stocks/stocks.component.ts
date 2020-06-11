import { Component, OnInit } from '@angular/core';
import {Stock} from './shared/stock.model';
import {StocksService} from './shared/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Stock[];
  constructor(private stocksService: StocksService) {}

  ngOnInit(): void {
    this.getStocks();
  }

  private getStocks(): void {
    this.stocksService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }
}
