import { Component, Input, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { CurrencyService } from '../../../services/currency.service';
import { ScrollerOptions } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-new-account-dialog',
  standalone: true,
  imports: [
    InputTextModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './new-account-dialog.component.html',
  styleUrl: './new-account-dialog.component.css',
})
export class NewAccountDialogComponent implements OnInit {
  @Input() dialogVisible: boolean = false;

  public form: FormGroup;

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

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      balance: [null, Validators.required],
      currency: [null, Validators.required],
    });
  }

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

  onCurrencySelect(event: DropdownChangeEvent) {
    console.log(this.form.value);
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

  getSuffix() {
    if (
      this.form.value.currency &&
      this.currencies?.find((c) => c.value === this.form.value.currency)
    ) {
      return this.form.value.currency.toUpperCase();
    }

    return '';
  }

  submitForm() {
    console.log(this.form.value);
    // TODO: submit form
  }
}
