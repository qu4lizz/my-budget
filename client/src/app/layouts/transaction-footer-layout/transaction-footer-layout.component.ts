import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationLayoutComponent } from '../navigation-layout/navigation-layout.component';
import { TransactionFooterComponent } from '../../components/shared/transaction-footer/transaction-footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-footer-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationLayoutComponent,
    TransactionFooterComponent,
    CommonModule,
  ],
  templateUrl: './transaction-footer-layout.component.html',
  styleUrl: './transaction-footer-layout.component.css',
})
export class TransactionFooterLayoutComponent {
  footerHeight: number = 0;

  setFooterHeight(height: number) {
    this.footerHeight = height;
  }
}
