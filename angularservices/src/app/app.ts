import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu-component/menu-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularservices');
}
