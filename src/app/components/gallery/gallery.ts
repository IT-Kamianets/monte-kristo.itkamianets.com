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
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/253910557.jpg?k=6e0b80f8a51a5ed8d9d96e73c7db1aebc5a664d41ddb1b875412f50ef0d026ef&o=', title: 'Лобі готелю' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285813875.jpg?k=7102dc2fecd8a6cc456c1c3e748b38b2d021c4bed0b253935f0197f0a166c598&o=', title: 'Ресторан' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/185029397.jpg?k=93d5831096155e1c334dd489019d89168023192c3074ac04c71e3a379154cdc9&o=', title: 'Деталі інтер\'єру' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289707566.jpg?k=2fc0edf0eb21af1e31341bf80effd8752a8813b6ee1159cfcb2158a14f41fb26&o=', title: 'Вхідна група' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/863538596.jpg?k=374854abf48f06e4a6580559c1f7cb5ac8f7f3f878c613634d58451a0b44ed90&o=', title: 'Бар' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/863538618.jpg?k=41116b156d1ef2bb77ca5165f03aada19450a6bdadf46dc111df37624a641d52&o=', title: 'Відпочинок' }
  ];
}