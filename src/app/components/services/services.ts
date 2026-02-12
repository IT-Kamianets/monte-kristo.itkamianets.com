import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services = [
    { icon: '🍽️', title: 'Ресторан', desc: 'Європейська кухня' },
    { icon: '🅿️', title: 'Парковка', desc: 'Безкоштовна охорона' },
    { icon: '📶', title: 'Wi-Fi', desc: 'Швидкісний інтернет' },
    { icon: '🍹', title: 'Бар', desc: 'Авторські коктейлі' }
  ];
}