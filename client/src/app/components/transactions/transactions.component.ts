import { Component, OnInit } from '@angular/core';
import { TransactionWithAccount } from '../../interfaces/TransactionWithAccount';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SingleTransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  public transactions: TransactionWithAccount[] | undefined;

  ngOnInit(): void {
    // TOOD: get transactions
  }
}
