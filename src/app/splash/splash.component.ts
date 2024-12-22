import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="splash-screen">
      <div class="splash-content">
        <div class="logo-container">
          <img src="https://cdn-icons-png.flaticon.com/512/1375/1375163.png" alt="Smart Home" class="logo">
          <div class="pulse-ring"></div>
        </div>
        <h1>Smart Home Security</h1>
        <p class="tagline">Protecting Your Home, Securing Your Peace of Mind</p>
        <div class="loader">
          <div class="loader-text">Loading your secure environment...</div>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .splash-screen {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
      color: white;
    }
    .splash-content {
      text-align: center;
      padding: 2rem;
    }
    .logo-container {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 2rem;
    }
    .logo {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 2;
    }
    .pulse-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
      }
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    .tagline {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.9;
    }
    .loader {
      max-width: 300px;
      margin: 0 auto;
    }
    .loader-text {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      opacity: 0.8;
    }
    .progress-bar {
      height: 4px;
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      background: white;
      animation: progress 3s ease-in-out;
    }
    @keyframes progress {
      from { width: 0; }
      to { width: 100%; }
    }
  `]
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 3000);
  }
}