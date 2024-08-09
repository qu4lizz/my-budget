import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { environment } from './environment/environment';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: NavigationLayoutComponent,
    children: [
      { path: '', redirectTo: 'accounts', pathMatch: 'full' },
      {
        path: 'accounts',
        title: `Accounts | ${environment.appName}`,
        component: AccountsComponent,
      },
    ],
  },
];
