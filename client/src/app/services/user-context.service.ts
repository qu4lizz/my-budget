import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from './currency.service';

const baseUrl = environment.api_url + '/settings';

@Injectable({
  providedIn: 'root',
})
export class UserContextService implements OnInit {
  constructor(
    private http: HttpClient,
    private currencyService: CurrencyService
  ) {}

  public defaultCurrency: string = 'eur';
  public exchangeRateDateUpdate: any;

  ngOnInit(): void {
    this.fetchDefaultCurrency();
  }

  public fetchDefaultCurrency() {
    return this.http
      .get(baseUrl + '/default-currency')
      .subscribe((data: any) => {
        this.fetchDateUpdate(data.defaultCurrency);
        this.defaultCurrency = data.defaultCurrency;
      });
  }

  public updateDefaultCurrency(currency: string) {
    return this.http
      .put(baseUrl + '/default-currency', { defaultCurrency: currency })
      .subscribe({
        next: (data: any) => {
          this.fetchDateUpdate(currency);
          this.defaultCurrency = currency;
        },
      });
  }

  private fetchDateUpdate(currency: string) {
    return this.currencyService
      .getExchangeRateDateUpdate(currency)
      .subscribe((date: any) => {
        this.exchangeRateDateUpdate = date;
      });
  }

  public deleteAllData() {
    return this.http.delete(baseUrl + '/delete-all-data');
  }
}
