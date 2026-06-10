import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingModalService } from '../../services/booking-modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private bookingModal: BookingModalService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openBooking() {
    this.bookingModal.open();
  }
}