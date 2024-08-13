import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NewTransactionDialogComponent } from '../../transactions/new-transaction-dialog/new-transaction-dialog.component';
import { AccountService } from '../../../services/account.service';
import { UserContextService } from '../../../services/user-context.service';

@Component({
  selector: 'app-transaction-footer',
  standalone: true,
  imports: [ButtonModule, NewTransactionDialogComponent],
  templateUrl: './transaction-footer.component.html',
  styleUrl: './transaction-footer.component.css',
})
export class TransactionFooterComponent implements OnInit, AfterViewInit {
  @Output() footerHeightChanged = new EventEmitter<number>();
  @ViewChild('footerRef') footerRef!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.footerRef) {
      this.footerHeightChanged.emit(this.footerRef.nativeElement.offsetHeight);
    }
  }

  public transactionDialogVisible: boolean = false;

  constructor(
    public accountService: AccountService,
    public userContext: UserContextService
  ) {}

  ngOnInit(): void {
    this.accountService.fetchAvailableBalance();
  }

  ngAfterViewInit(): void {
    if (this.footerRef)
      this.footerHeightChanged.emit(this.footerRef.nativeElement.offsetHeight);
  }

  showTransactionDialog(value: boolean) {
    this.transactionDialogVisible = value;
  }
}
