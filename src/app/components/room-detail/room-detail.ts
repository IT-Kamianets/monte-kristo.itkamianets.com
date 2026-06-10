import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ROOMS, Room } from '../rooms/rooms.data';
import { BookingModalService } from '../../services/booking-modal.service';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-detail.html',
  styleUrl: './room-detail.css'
})
export class RoomDetailComponent implements OnInit {
  room: Room | undefined;

  constructor(private route: ActivatedRoute, private bookingModal: BookingModalService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.room = ROOMS.find(r => r.id === id);
  }

  openBooking() { this.bookingModal.open(); }
}
