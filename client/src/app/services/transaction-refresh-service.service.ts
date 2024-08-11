import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class TransactionRefreshService {
  private refreshTransactionsSubject = new Subject<void>();

  refreshTransactions$ = this.refreshTransactionsSubject.asObservable();

  triggerRefresh() {
    this.refreshTransactionsSubject.next();
  }
}
