import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.default),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.default),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
