import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: NavigationLayoutComponent,
    children: [],
  },
];
