import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { RoomsComponent } from './components/rooms/rooms';
import { GalleryComponent } from './components/gallery/gallery';
import { ServicesComponent } from './components/services/services';
import { ReservationComponent } from './components/reservation/reservation';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'booking', component: ReservationComponent },
  { path: '**', redirectTo: '' }
];