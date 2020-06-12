import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Stock} from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor( private http: HttpClient) { }

  private StocksAPI = environment.StockAPIUrl;
  private static generateRandomPricesAndCalculateChange(newStock: Stock): Stock {
    // increase price by 10%
    const tenPercentOfCurrentPrice = ((newStock.price / 100) * 10);
    // simple determine if stock price should reduce or increase by generating random number between 0 and 1 (price fluctuation)
    if (Math.round(Math.random())){
      newStock.price += Number(tenPercentOfCurrentPrice);
    }else{
      newStock.price -= Number(tenPercentOfCurrentPrice);
    }
    return newStock;
  }

  static updateStockPrices(oldStocks: Stock[]): Stock[] {
    return oldStocks.map(StocksService.generateRandomPricesAndCalculateChange);
  }

  getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.StocksAPI)
      .pipe(
        tap((stocks) => {
        stocks.forEach(stock => {
          stock.initialPrice = stock.price;
        });
      }),
        catchError(this.handleError<Stock[]>('api-request', []))
      );
  }

  private handleError<Error>(operation: string, result?: Error) {
    return (error: any): Observable<Error> => {
      // handle errors
      console.error(error);
      return of(result as Error);
    };
  }
}
