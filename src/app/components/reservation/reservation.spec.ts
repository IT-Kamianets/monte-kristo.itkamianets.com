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
  // Ось ці змінні, яких не міг знайти Angular
  bookingData = {
    name: '',
    phone: '',
    roomType: 'standard',
    date: ''
  };

  isSubmitted = false;

  // А ось функція відправки форми
  onSubmit() {
    console.log('Дані бронювання:', this.bookingData);
    this.isSubmitted = true;
  }
}