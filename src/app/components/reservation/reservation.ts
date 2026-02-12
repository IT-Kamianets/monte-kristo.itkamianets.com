import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class ReservationComponent {
  // Ось змінні, яких не вистачало
  bookingData = {
    name: '',
    phone: '',
    roomType: 'standard',
    date: ''
  };

  isSubmitted = false;

  // Ось функція, яку шукала кнопка
  onSubmit() {
    console.log('Бронювання:', this.bookingData);
    this.isSubmitted = true;
  }
}