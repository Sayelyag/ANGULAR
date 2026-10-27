import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {}
