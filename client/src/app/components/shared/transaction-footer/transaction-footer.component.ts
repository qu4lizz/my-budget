import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NewTransactionDialogComponent } from '../../transactions/new-transaction-dialog/new-transaction-dialog.component';
import { AccountService } from '../../../services/account.service';
import { UserContextService } from '../../../services/user-context.service';

@Component({
  selector: 'app-transaction-footer',
  standalone: true,
  imports: [ButtonModule, NewTransactionDialogComponent],
  templateUrl: './transaction-footer.component.html',
  styleUrl: './transaction-footer.component.css',
})
export class TransactionFooterComponent implements OnInit {
  constructor(
    public accountService: AccountService,
    public userContext: UserContextService
  ) {}

  public transactionDialogVisible: boolean = false;

  ngOnInit(): void {
    this.accountService.getAvailableBalance();
  }

  showTransactionDialog(value: boolean) {
    this.transactionDialogVisible = value;
  }
}
