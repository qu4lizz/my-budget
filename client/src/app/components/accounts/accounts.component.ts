import { Component, OnInit } from '@angular/core';
import { SingleAccountComponent } from './single-account/single-account.component';
import { Account } from '../../interfaces/Account';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NewAccountDialogComponent } from './new-account-dialog/new-account-dialog.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    SingleAccountComponent,
    ButtonModule,
    DialogModule,
    NewAccountDialogComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  public accounts: Account[] | undefined;

  dialogVisible: boolean = false;

  ngOnInit(): void {
    // TODO: send request to get accounts
  }

  showDialog(value: boolean) {
    this.dialogVisible = value;
  }
}
