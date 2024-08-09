import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-transaction-footer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './transaction-footer.component.html',
  styleUrl: './transaction-footer.component.css',
})
export class TransactionFooterComponent implements OnInit {
  constructor() {}

  public transactionDialogVisible: boolean = false;
  public availableBalance: number = 0;
  public defaultCurrency: string = '';

  ngOnInit(): void {
    // TODO: get balance
  }

  showTransactionDialog(value: boolean) {
    this.transactionDialogVisible = value;
  }
}
