import { Component } from '@angular/core';
import { NavigationLayoutComponent } from '../navigation-layout/navigation-layout.component';
import { SettingsFooterComponent } from '../../components/shared/settings-footer/settings-footer.component';

@Component({
  selector: 'app-copyright-footer',
  standalone: true,
  imports: [NavigationLayoutComponent, SettingsFooterComponent],
  templateUrl: './copyright-footer.component.html',
  styleUrl: './copyright-footer.component.css',
})
export class CopyrightFooterComponent {}
