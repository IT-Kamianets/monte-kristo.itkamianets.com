import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROOMS } from './rooms.data';
import { BookingModalService } from '../../services/booking-modal.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class RoomsComponent {
  rooms = ROOMS;
  constructor(private bookingModal: BookingModalService) {}
  openBooking() { this.bookingModal.open(); }
}