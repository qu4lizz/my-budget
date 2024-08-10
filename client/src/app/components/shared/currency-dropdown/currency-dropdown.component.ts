import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyService } from '../../../services/currency.service';
import { ScrollerOptions } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.css',
})
export class CurrencyDropdownComponent implements OnInit {
  @Output() onCurrencyChange = new EventEmitter<any>();
  @Input() selectedCurrency: any;
  @Input() style: any;

  constructor(private currencyService: CurrencyService) {}

  public currencies: any[] | undefined;
  public currenciesOptions: any[] | undefined;
  loading: boolean = false;
  public virtualScrollItemSize = 40;
  options: ScrollerOptions = {
    delay: 100,
    showLoader: true,
    lazy: true,
    onLazyLoad: this.onLazyLoad.bind(this),
    step: this.virtualScrollItemSize,
  };

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe({
      next: (currencies: any) => {
        this.currencies = Object.keys(currencies).map((key) => {
          return {
            label: currencies[key] || key,
            value: key,
          };
        });
      },
      error(err) {
        // TODO: handle error
        console.log(err);
      },
    });
  }

  onSelect(event: any) {
    this.onCurrencyChange.emit(event);
  }

  onLazyLoad(event: any) {
    this.loading = true;
    console.log(event);

    const { first, last } = event;
    const currencies = [...(this.currencies ?? [])];

    for (let i = first; i < last; i++) {
      currencies[i] = this.currencies![i];
    }

    this.currenciesOptions = currencies;
    this.loading = false;
  }
}
