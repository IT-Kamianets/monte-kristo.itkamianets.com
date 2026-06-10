import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { RoomsComponent } from './components/rooms/rooms';
import { RoomDetailComponent } from './components/room-detail/room-detail';
import { GalleryComponent } from './components/gallery/gallery';
import { ServicesComponent } from './components/services/services';
import { ReservationComponent } from './components/reservation/reservation';
import { ContactsComponent } from './components/contacts/contacts';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'booking', component: ReservationComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];