import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Transaction } from '../interfaces/Transaction';

const baseUrl = environment.api_url + '/transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public getTransactions(query: string) {
    return this.http.get(baseUrl + query);
  }

  public getTransactionsByAccount(query: string, idAccount: number) {
    return this.http.get(baseUrl + '/' + idAccount + query);
  }

  public createTransaction(transaction: Transaction) {
    return this.http.post(baseUrl, transaction);
  }
}
