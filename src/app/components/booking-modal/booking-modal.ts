import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookingModalService } from '../../services/booking-modal.service';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css'
})
export class BookingModalComponent {
  name = '';
  phone = '';
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private modal: BookingModalService, private http: HttpClient) {}

  get isOpen$() { return this.modal.open$; }

  close() {
    this.modal.close();
    this.reset();
  }

  onOverlayClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }

  submit() {
    if (!this.name.trim() || !this.phone.trim()) return;
    this.status = 'loading';

    const message = `Запит на бронювання\nГотель: Monte Cristo\nІм'я: ${this.name}\nТелефон: ${this.phone}`;

    this.http.post('https://it.webart.work/api/telegram/contact', {
      slug: 'monte-kristo',
      message
    }).subscribe({
      next: () => { this.status = 'success'; },
      error: () => { this.status = 'error'; }
    });
  }

  private reset() {
    this.name = '';
    this.phone = '';
    this.status = 'idle';
  }
}
