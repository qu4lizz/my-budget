import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.api_url + '/settings';

@Injectable({
  providedIn: 'root',
})
export class UserContextService implements OnInit {
  constructor(private http: HttpClient) {}

  public defaultCurrency: string = 'eur';

  ngOnInit(): void {
    this.fetchDefaultCurrency();
  }

  public fetchDefaultCurrency() {
    return this.http
      .get(baseUrl + '/default-currency')
      .subscribe((data: any) => {
        this.defaultCurrency = data.defaultCurrency;
      });
  }

  public updateDefaultCurrency(currency: string) {
    return this.http
      .put(baseUrl + '/default-currency', { defaultCurrency: currency })
      .subscribe({
        next: (data: any) => (this.defaultCurrency = currency),
      });
  }

  public deleteAllData() {
    return this.http.delete(baseUrl + '/delete-all-data');
  }
}
