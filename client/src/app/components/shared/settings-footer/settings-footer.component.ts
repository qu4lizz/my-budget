import { Component } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-settings-footer',
  standalone: true,
  imports: [],
  templateUrl: './settings-footer.component.html',
  styleUrl: './settings-footer.component.css',
})
export class SettingsFooterComponent {
  public client: string = environment.client;

  public currentYear: number = new Date().getFullYear();
}
