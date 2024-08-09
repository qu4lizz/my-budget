import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { environment } from './environment/environment';
import { TransactionFooterLayoutComponent } from './layouts/transaction-footer-layout/transaction-footer-layout.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: TransactionFooterLayoutComponent,
    children: [
      { path: '', redirectTo: 'accounts', pathMatch: 'full' },
      {
        path: 'accounts',
        title: `Accounts | ${environment.appName}`,
        component: AccountsComponent,
      },
      {
        path: 'transactions',
        title: `Transactions | ${environment.appName}`,
        component: TransactionsComponent,
      },
    ],
  },
];
