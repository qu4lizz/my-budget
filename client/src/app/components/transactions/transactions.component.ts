import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionWithAccount } from '../../interfaces/TransactionWithAccount';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { DropdownModule } from 'primeng/dropdown';
import { Account } from '../../interfaces/Account';
import { TransactionService } from '../../services/transaction.service';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';
import { TransactionRefreshService } from '../../services/transaction-refresh.service';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    SingleTransactionComponent,
    DropdownModule,
    LoadingSpinnerComponent,
    PaginatorModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit, OnDestroy {
  public transactions: TransactionWithAccount[] = [];

  public accounts: Account[] = [];

  public page: number = 0;
  public size: number = 10;
  public totalRecords: number = 0;

  public loading: boolean = true;

  private accountId?: number;

  private refreshSubscription!: Subscription;

  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    private transactionRefreshService: TransactionRefreshService
  ) {}

  ngOnInit(): void {
    this.loadTransactions();

    this.refreshSubscription =
      this.transactionRefreshService.refreshTransactions$.subscribe(() => {
        this.loadTransactions();
      });

    this.accountService.getAllAccounts().subscribe({
      next: (accounts: any) => (this.accounts = accounts),
    });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadTransactions() {
    const query = `?page=${this.page}&size=${this.size}`;

    if (this.accountId) {
      // for selected account
      this.transactionService
        .getTransactionsByAccount(query, this.accountId)
        .subscribe({
          next: (data: any) => {
            this.transactions = data.content;
            this.totalRecords = data.totalElements;
          },
        });
    } else {
      this.transactionService.getTransactions(query).subscribe({
        next: (data: any) => {
          this.transactions = data.content;
          this.totalRecords = data.totalElements;
        },
        complete: () => (this.loading = false),
      });
    }
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.size = event.rows;
    this.loadTransactions();
  }

  onAccountSelect(event: any) {
    this.accountId = event.value;
    this.page = 0;
    this.loadTransactions();
  }
}
