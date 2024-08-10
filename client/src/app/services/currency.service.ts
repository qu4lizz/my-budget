import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  public getAllCurrencies() {
    return this.http.get(environment.currenciesURL);
  }

  public getExchangedAmount(
    from: string,
    to: string,
    amount: number
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      this.getExchangeRates(from).subscribe({
        next: (rates: any) => {
          resolve(amount * rates[from][to]);
        },
        error(err: any) {
          reject();
        },
      });
    });
  }

  private getExchangeRates(from: string) {
    const url = environment.exchangeURL.replace('<CURRENCY>', from);
    return this.http.get(url);
  }

  public getExchangeRateDateUpdate(from: string) {
    const url = environment.exchangeURL.replace('<CURRENCY>', from);
    return this.http
      .get<{ date: string }>(url)
      .pipe(map((response) => this.transformDate(response.date)));
  }
  private transformDate(dateStr: string): string {
    const [year, month, day] = dateStr.split('-');
    return `${day}. ${month}. ${year}.`;
  }
}
