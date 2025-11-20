import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

function readToken(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('token');
}

export const authGuard = (): boolean | UrlTree => {
  const router = inject(Router);
  const hasToken = !!readToken();

  if (hasToken) return true;
  return router.parseUrl('/login');
};
