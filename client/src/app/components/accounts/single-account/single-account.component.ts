import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Account } from '../../../interfaces/Account';
import { CurrencyService } from '../../../services/currency.service';
import { UserContextService } from '../../../services/user-context.service';

@Component({
  selector: 'app-single-account',
  standalone: true,
  imports: [],
  templateUrl: './single-account.component.html',
  styleUrl: './single-account.component.css',
})
export class SingleAccountComponent implements OnInit, OnChanges {
  @Input() account: Account | undefined;

  public exchangedValue: number | undefined;

  constructor(
    private currencyService: CurrencyService,
    public userContext: UserContextService
  ) {}

  ngOnInit(): void {
    this.calculateExchangedAmount();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['account']) {
      this.calculateExchangedAmount();
    }
  }

  calculateExchangedAmount() {
    this.currencyService
      .getExchangedAmount(
        this.account!.currency,
        this.userContext.defaultCurrency,
        this.account!.balance
      )
      .then((value) => {
        this.exchangedValue = value;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
