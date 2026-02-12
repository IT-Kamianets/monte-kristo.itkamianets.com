import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Обов'язково для routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isMenuOpen = false; // Для мобільного меню (на майбутнє)

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}