import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { CurrencyDropdownComponent } from '../../shared/currency-dropdown/currency-dropdown.component';

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
    CurrencyDropdownComponent,
  ],
  templateUrl: './new-account-dialog.component.html',
  styleUrl: './new-account-dialog.component.css',
})
export class NewAccountDialogComponent implements OnInit {
  @Input() dialogVisible: boolean = false;
  @Output() dialogVisibleChange = new EventEmitter<boolean>();

  public form: FormGroup;

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

  ngOnInit(): void {}

  onCurrencySelect(event: DropdownChangeEvent) {
    this.form.setValue({ ...this.form.value, currency: event.value });
  }

  getSuffix() {
    if (this.form.value.currency) {
      return this.form.value.currency.toUpperCase();
    }

    return '';
  }

  onCancel() {
    this.dialogVisibleChange.emit(false);
  }

  onSubmitForm() {
    console.log(this.form.value);
    // TODO: submit form
  }
}
