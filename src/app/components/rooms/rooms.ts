import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class RoomsComponent {
  rooms = [
    {
      title: 'Стандарт Класик',
      price: '1200 грн',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
      desc: 'Затишний номер у класичному стилі. Ідеальний вибір для соло-мандрівників або пар.',
      features: ['20 м²', 'King Size ліжко', 'Душова кабіна', 'Wi-Fi']
    },
    {
      title: 'Напівлюкс',
      price: '1800 грн',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      desc: 'Просторий номер із зоною для відпочинку та робочим столом. Вишуканий інтер\'єр у темних тонах.',
      features: ['35 м²', 'Міні-бар', 'Робоча зона', 'Вид на старе місто']
    },
    {
      title: 'Люкс "Монте-Крісто"',
      price: '2500 грн',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop',
      desc: 'Вершина комфорту. Двокімнатний номер з вітальнею, ванною кімнатою та панорамними вікнами.',
      features: ['50 м²', 'Джакузі', 'Халати та капці', 'Преміум косметика']
    }
  ];
}