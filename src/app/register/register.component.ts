import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="register-container">
      <div class="register-card">
        <div class="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/1375/1375163.png" alt="Smart Home" class="logo-img">
        </div>
        <h2>Welcome to Smart Home Security</h2>
        <p class="subtitle">Create your account to get started</p>
        
        <form (ngSubmit)="onSubmit()" class="register-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              class="form-control" 
              [(ngModel)]="username" 
              name="username" 
              required
              placeholder="Enter your username">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              class="form-control" 
              [(ngModel)]="email" 
              name="email" 
              required
              placeholder="Enter your email">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              class="form-control" 
              [(ngModel)]="password" 
              name="password" 
              required
              placeholder="Create a password">
          </div>

          <button type="submit" class="btn-register">Create Account</button>
        </form>

        <p class="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
      padding: 2rem;
    }
    .register-card {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }
    .logo {
      text-align: center;
      margin-bottom: 2rem;
    }
    .logo-img {
      width: 80px;
      height: 80px;
    }
    h2 {
      text-align: center;
      color: #1a237e;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
    }
    .register-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    label {
      color: #444;
      font-weight: 500;
    }
    .form-control {
      padding: 0.8rem;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    .form-control:focus {
      border-color: #1a237e;
      outline: none;
    }
    .btn-register {
      background: linear-gradient(to right, #1a237e, #0d47a1);
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .btn-register:hover {
      transform: translateY(-2px);
    }
    .login-link {
      text-align: center;
      margin-top: 1.5rem;
      color: #666;
    }
    .login-link a {
      color: #1a237e;
      text-decoration: none;
      font-weight: 500;
    }
    .login-link a:hover {
      text-decoration: underline;
    }
  `]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Registration submitted');
    this.router.navigate(['/dashboard']);
  }
}