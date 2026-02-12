import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  photos = [
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000', title: 'Лобі готелю' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000', title: 'Ресторан' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000', title: 'Деталі інтер\'єру' },
    { url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000', title: 'Вхідна група' },
    { url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000', title: 'Бар' },
    { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000', title: 'Відпочинок' }
  ];
}