import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Account } from '../interfaces/Account';

const baseUrl = environment.api_url + '/accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  public createAccount(account: Account) {
    return this.http.post(baseUrl, account);
  }

  public getAccounts(query: string) {
    return this.http.get(baseUrl + query);
  }

  public getAvailableBalance() {
    return this.http.get(baseUrl + '/available-balance');
  }
}
