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

    const { email, password } = this.form.value;

    this.http
      .post<{ token: string }>('http://localhost:3000/auth/login', {
        email,
        password,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.error.set('Invalid email or password.');
        },
      });
  }
}
