import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  effect,
} from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

// read JWT from local storage
function readJwtFromLocalStorage(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem('token');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-root' },
})
export default class App {
  private readonly router = inject(Router);

  // Logged in state signal based on presence of JWT
  isLoggedIn = signal<boolean>(!!readJwtFromLocalStorage());

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update logged in state on navigation
        this.isLoggedIn.set(!!readJwtFromLocalStorage());
      }
    });

    // update when the token changes in another tab
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (event.key === 'token') {
          this.isLoggedIn.set(!!readJwtFromLocalStorage());
        }
      });
    }
  }

  /** Navigate to /login. */
  goToLogin(): void {
    void this.router.navigate(['/login']);
  }

  /** Clear token and go to /login. */
  logout(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
    }
    this.isLoggedIn.set(false);
    void this.router.navigate(['/login']);
  }
}
