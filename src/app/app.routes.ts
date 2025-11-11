import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./feature/landing/landing.component').then(
            (m) => m.LandingComponent
          ),
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('./feature/pages/room/room.component').then(
            (m) => m.RoomComponent
          ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./feature/pages/about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./feature/pages/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
    ],
  },
];
