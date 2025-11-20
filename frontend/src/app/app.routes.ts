import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

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
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((m) => m.default),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
