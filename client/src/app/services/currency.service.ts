import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  public getAllCurrencies() {
    return this.http.get(environment.currenciesURL);
  }
}
