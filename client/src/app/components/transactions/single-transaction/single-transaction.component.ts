import { Component, Input, OnInit } from '@angular/core';
import { TransactionWithAccount } from '../../../interfaces/TransactionWithAccount';
import { CurrencyService } from '../../../services/currency.service';
import { UserContextService } from '../../../services/user-context.service';

@Component({
  selector: 'app-single-transaction',
  standalone: true,
  imports: [],
  templateUrl: './single-transaction.component.html',
  styleUrl: './single-transaction.component.css',
})
export class SingleTransactionComponent implements OnInit {
  @Input() transaction: TransactionWithAccount | undefined;

  public exchangedValue: number | undefined;

  constructor(
    private currencyService: CurrencyService,
    public userContext: UserContextService
  ) {}

  ngOnInit(): void {
    this.getExchangedAmount();
  }

  getExchangedAmount() {
    this.currencyService
      .getExchangedAmount(
        this.transaction!.currency,
        this.userContext.defaultCurrency,
        this.transaction!.amount
      )
      .then((value) => {
        this.exchangedValue = value;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
