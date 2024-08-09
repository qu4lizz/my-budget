import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UserContextService } from '../../../services/user-context.service';

@Component({
  selector: 'app-transaction-footer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './transaction-footer.component.html',
  styleUrl: './transaction-footer.component.css',
})
export class TransactionFooterComponent implements OnInit {
  constructor(public userContext: UserContextService) {}

  public transactionDialogVisible: boolean = false;

  ngOnInit(): void {
    // TODO: get balance
  }

  showTransactionDialog(value: boolean) {
    this.transactionDialogVisible = value;
  }
}
