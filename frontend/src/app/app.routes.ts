import { Routes } from '@angular/router';

/**
 * Client-side routes for the SPA.
 */
export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.default),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
