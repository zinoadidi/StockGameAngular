import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Stock} from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private StocksAPI = environment.StockAPIUrl;
  private initialStocks: Stock[];
  constructor( private http: HttpClient) { }

  getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.StocksAPI)
      .pipe(
        tap(stocks => this.initialStocks = stocks),
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

  getInitialStocks(): Observable<Stock[]>{
    return of(this.initialStocks);
  }
}
