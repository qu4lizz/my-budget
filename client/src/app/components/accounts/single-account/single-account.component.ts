import { Component, Input } from '@angular/core';
import { Account } from '../../../interfaces/Account';

@Component({
  selector: 'app-single-account',
  standalone: true,
  imports: [],
  templateUrl: './single-account.component.html',
  styleUrl: './single-account.component.css',
})
export class SingleAccountComponent {
  @Input() account: Account | undefined;
}
