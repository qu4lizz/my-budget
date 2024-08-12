import { Component, OnInit } from '@angular/core';
import { UserContextService } from '../../services/user-context.service';
import { CurrencyDropdownComponent } from '../shared/currency-dropdown/currency-dropdown.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CurrencyDropdownComponent, ConfirmPopupModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  constructor(
    public userContext: UserContextService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.userContext.fetchDefaultCurrency();
  }

  onCurrencyChange(event: any) {
    this.userContext.updateDefaultCurrency(event.value);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Default currency set to ${event.value.toUpperCase()}`,
    });
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete all data?',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.deleteAllData();
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

  deleteAllData() {
    this.userContext.deleteAllData().subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'All data deleted successfully',
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to delete all data',
        });
      },
    });
  }
}
