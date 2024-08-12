import { Component, OnInit } from '@angular/core';
import { SingleAccountComponent } from './single-account/single-account.component';
import { Account } from '../../interfaces/Account';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NewAccountDialogComponent } from './new-account-dialog/new-account-dialog.component';
import { AccountService } from '../../services/account.service';
import { PaginatorModule } from 'primeng/paginator';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { RefreshService } from '../../services/refresh.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    SingleAccountComponent,
    ButtonModule,
    DialogModule,
    NewAccountDialogComponent,
    PaginatorModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  public accounts: Account[] = [];

  dialogVisible: boolean = false;

  public page: number = 0;
  public size: number = 5;
  public totalRecords: number = 0;

  public loading: boolean = true;

  private refreshSubscription!: Subscription;

  constructor(
    private accountService: AccountService,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    this.loadData();

    this.refreshSubscription = this.refreshService.refresh$.subscribe(() => {
      this.loadData();
    });
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.size = event.rows;
    this.loadData();
  }

  loadData() {
    const query = `?page=${this.page}&size=${this.size}`;
    this.accountService.getAccounts(query).subscribe({
      next: (data: any) => {
        this.accounts = data.content;
        this.totalRecords = data.totalElements;
      },
      error: (err: any) => {},
      complete: () => (this.loading = false),
    });
  }

  showDialog(value: boolean) {
    this.dialogVisible = value;
  }
}
