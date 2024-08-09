import { Component, OnInit } from '@angular/core';
import { TransactionWithAccount } from '../../interfaces/TransactionWithAccount';
import { SingleTransactionComponent } from './single-transaction/single-transaction.component';
import { DropdownModule } from 'primeng/dropdown';
import { Account } from '../../interfaces/Account';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SingleTransactionComponent, DropdownModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  public transactions: TransactionWithAccount[] | undefined;

  public accounts: Account[] | undefined;

  public tt: TransactionWithAccount = {
    id: 1,
    account: {
      id: 1,
      name: 'Account 1',
      balance: 100,
      currency: 'eur',
    },
    description: 'Gambit',
    amount: -10,
    currency: 'usd',
  };

  ngOnInit(): void {
    // TOOD: get transactions
  }

  onAccountSelect(event: any) {
    console.log(event);
  }
}
