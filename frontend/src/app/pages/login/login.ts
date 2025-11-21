import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  /** Form with simple validation */
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  // Error message from backend
  error = signal('');

  /**
   * Sends credentials to backend.
   * On success stores JWT and redirects to dashboard.
   */
  submit() {
    this.error.set('');
    if (this.form.invalid) return;

    // read safe values and trim
    const { email, password } = this.form.getRawValue();
    const payload = {
      email: (email ?? '').trim(),
      password: (password ?? '').trim(),
    };
    if (!payload.email || !payload.password) {
      this.error.set('Email and password are required.');
      return;
    }

    // use the proxy path (no host) to avoid CORS in dev
    this.http.post<{ token: string }>('/auth/login', payload).subscribe({
      next: (res) => {
        console.log('payload', payload);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login error', err);
        this.error.set('Invalid email or password.');
      },
    });
  }
}
