import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.api_url + '/settings';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor(private http: HttpClient) {}

  public defaultCurrency: string = 'eur';

  public getDefaultCurrency() {
    this.http.get(baseUrl + '/default-currency').subscribe((data: any) => {
      this.defaultCurrency = data.defaultCurrency;
    });
  }

  public updateDefaultCurrency(currency: string) {
    this.http
      .put(baseUrl + '/default-currency', { defaultCurrency: currency })
      .subscribe({
        next: (data: any) => (this.defaultCurrency = data.defaultCurrency),
      });
  }

  public deleteAllData() {
    this.http.delete(baseUrl + '/delete-all-data');
  }
}
