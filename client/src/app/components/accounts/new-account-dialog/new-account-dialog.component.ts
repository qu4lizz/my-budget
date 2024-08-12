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
import { MessageService, ScrollerOptions } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CurrencyDropdownComponent } from '../../shared/currency-dropdown/currency-dropdown.component';
import { Account } from '../../../interfaces/Account';
import { AccountService } from '../../../services/account.service';

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
  @Output() refreshData = new EventEmitter();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private messageService: MessageService
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
    const account: Account = { ...this.form.value };

    this.accountService.createAccount(account).subscribe({
      next: () => {
        this.refreshData.emit();
        this.accountService.fetchAvailableBalance();
      },
      error: (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
        });
      },
      complete: () => {
        this.dialogVisibleChange.emit(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Account created successfully',
        });
      },
    });
  }
}
