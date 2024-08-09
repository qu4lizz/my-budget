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
    console.log('call');
    this.currencyService
      .getExchangeRates(this.transaction!.currency)
      .subscribe({
        next: (rates: any) => {
          this.exchangedValue =
            this.transaction!.amount *
            rates[this.transaction!.currency][this.userContext.defaultCurrency];
        },
        error(err: any) {
          return 'error';
        },
      });
  }
}
