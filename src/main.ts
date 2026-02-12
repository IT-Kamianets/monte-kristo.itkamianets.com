import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Виправлено шлях
import { AppComponent } from './app/app';     // Виправлено шлях

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));