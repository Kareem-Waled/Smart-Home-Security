import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="app-header">
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/1375/1375163.png" alt="Smart Home" class="logo-img">
        <span class="logo-text">Smart Home Security</span>
      </div>
      <div class="time">{{ currentTime | date:'short' }}</div>
    </header>
  `,
  styles: [`
    .app-header {
      background: linear-gradient(to right, #1a237e, #0d47a1);
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .logo-img {
      width: 40px;
      height: 40px;
    }
    .logo-text {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .time {
      font-size: 1.1rem;
      background: rgba(255,255,255,0.1);
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
  `]
})
export class HeaderComponent {
  currentTime = new Date();

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}