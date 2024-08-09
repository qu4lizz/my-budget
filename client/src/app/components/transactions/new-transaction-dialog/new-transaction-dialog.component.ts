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
export class NewTransactionDialogComponent {
  @Input() dialogVisible: boolean = false;
  @Output() dialogVisibleChange = new EventEmitter<boolean>();

  public form: FormGroup;

  public typesOptions = TransactionType;

  public accounts: Account[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    public userContext: UserContextService
  ) {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      type: [null, Validators.required],
      account: [null, Validators.required],
      amount: [null, Validators.required],
    });
  }

  onCancel() {
    console.log('cancel1');
    this.dialogVisibleChange.emit(false);
  }

  onSubmitForm() {
    console.log(this.form.value);
    // TODO: submit form
  }
}
