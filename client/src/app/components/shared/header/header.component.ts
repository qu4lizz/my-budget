import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Accounts',
        icon: PrimeIcons.CREDIT_CARD,
        routerLink: '/accounts',
      },
      {
        label: 'Transactions',
        icon: PrimeIcons.RECEIPT,
        routerLink: '/transactions',
      },
      {
        label: 'Settings',
        icon: PrimeIcons.COG,
        routerLink: '/settings',
      },
    ];
  }
}
