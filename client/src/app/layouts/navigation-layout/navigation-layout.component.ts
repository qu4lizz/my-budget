import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './navigation-layout.component.html',
  styleUrl: './navigation-layout.component.css',
})
export class NavigationLayoutComponent {}
