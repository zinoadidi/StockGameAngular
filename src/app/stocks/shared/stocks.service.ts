import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {Stock} from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private StocksAPI = environment.StockAPIUrl;
  constructor( private http: HttpClient) { }

  getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.StocksAPI)
      .pipe(
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
