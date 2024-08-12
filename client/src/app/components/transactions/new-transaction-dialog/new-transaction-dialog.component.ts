import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { UserContextService } from '../../../services/user-context.service';
import { TransactionType } from '../../../interfaces/TransactionType';
import { Account } from '../../../interfaces/Account';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../interfaces/Transaction';
import { RefreshService } from '../../../services/refresh.service';
import { AccountService } from '../../../services/account.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-transaction-dialog',
  standalone: true,
  imports: [
    InputTextModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './new-transaction-dialog.component.html',
  styleUrl: './new-transaction-dialog.component.css',
})
export class NewTransactionDialogComponent implements OnInit {
  @Input() dialogVisible: boolean = false;
  @Output() dialogVisibleChange = new EventEmitter<boolean>();

  public form: FormGroup;

  public typesOptions = TransactionType;

  public accounts: Account[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public userContext: UserContextService,
    private transactionService: TransactionService,
    private transactionRefreshService: RefreshService,
    private accountService: AccountService,
    private messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      type: [null, Validators.required],
      account: [null, Validators.required],
      amount: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe({
      next: (accounts: any) => (this.accounts = accounts),
    });
  }

  onCancel() {
    this.dialogVisibleChange.emit(false);
  }

  onSubmitForm() {
    const amount =
      this.form.value.type === 'Income'
        ? this.form.value.amount
        : -this.form.value.amount;

    const transaction: Transaction = {
      description: this.form.value.description,
      amount: amount,
      currency: this.userContext.defaultCurrency,
      idAccount: this.form.value.account,
    };
    this.transactionService.createTransaction(transaction).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Transaction created successfully',
        });
      },
      error: (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
        });
      },
      complete: () => {
        this.transactionRefreshService.triggerRefresh();
        this.accountService.fetchAvailableBalance();
        this.dialogVisibleChange.emit(false);
      },
    });
  }
}
