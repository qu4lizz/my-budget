import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationLayoutComponent } from '../navigation-layout/navigation-layout.component';
import { TransactionFooterComponent } from '../../components/shared/transaction-footer/transaction-footer.component';

@Component({
  selector: 'app-transaction-footer-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationLayoutComponent,
    TransactionFooterComponent,
  ],
  templateUrl: './transaction-footer-layout.component.html',
  styleUrl: './transaction-footer-layout.component.css',
})
export class TransactionFooterLayoutComponent {}
