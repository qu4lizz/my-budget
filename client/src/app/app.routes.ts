import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { environment } from './environment/environment';
import { TransactionFooterLayoutComponent } from './layouts/transaction-footer-layout/transaction-footer-layout.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TransactionFooterLayoutComponent,
    children: [
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
  {
    path: '',
    component: NavigationLayoutComponent,
    children: [
      {
        path: 'settings',
        title: `Settings | ${environment.appName}`,
        component: SettingsComponent,
      },
    ],
  },
];
