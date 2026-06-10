import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingModalService } from '../../services/booking-modal.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {
  constructor(private bookingModal: BookingModalService) {}
  openBooking() { this.bookingModal.open(); }
  
  features = [
    { icon: '🏰', title: 'Біля Фортеці', text: '5 хвилин пішки до Старого замку' },
    { icon: '🍷', title: 'Вишуканий ресторан', text: 'Європейська кухня та авторські вина' },
    { icon: '🅿️', title: 'Власна парковка', text: 'Безкоштовна стоянка під охороною' },
    { icon: '24/7', title: 'Цілодобовий сервіс', text: 'Заселення та обслуговування у будь-який час' }
  ];

  reviews = [
    { name: 'Олена К.', text: 'Неймовірне місце! Вид з вікна просто заворожує. Дуже чисто і затишно.', rating: '★★★★★' },
    { name: 'Максим Д.', text: 'Найкращий готель у Кам\'янці. Сніданки смачні, персонал ввічливий.', rating: '★★★★★' },
    { name: 'Julia S.', text: 'Atmospheric place right in the old town. Highly recommend!', rating: '★★★★☆' }
  ];
}