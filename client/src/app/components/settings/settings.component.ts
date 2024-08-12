import { Component, OnInit } from '@angular/core';
import { UserContextService } from '../../services/user-context.service';
import { CurrencyDropdownComponent } from '../shared/currency-dropdown/currency-dropdown.component';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CurrencyDropdownComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  constructor(
    public userContext: UserContextService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.userContext.fetchDefaultCurrency();
  }

  onCurrencyChange(event: any) {
    this.userContext.updateDefaultCurrency(event.value);
  }

  deleteAllData() {
    this.userContext.deleteAllData().subscribe({
      next: () => {
        // TODO: toast
      },
      error: () => {
        // TODO: toast
      },
    });
  }
}
