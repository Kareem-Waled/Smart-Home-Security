import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { SensorCardComponent, SensorData } from '../shared/sensor-card/sensor-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SensorCardComponent],
  template: `
    <div class="dashboard">
      <app-header></app-header>
      
      <main class="dashboard-content">
        <div class="status-summary">
          <h2>System Status: <span class="status-active">Active</span></h2>
          <p>Last updated: {{ lastUpdate | date:'medium' }}</p>
        </div>

        <div class="sensor-grid">
          <app-sensor-card 
            *ngFor="let sensor of sensors" 
            [data]="sensor"
            [isAlert]="sensor.status === 'Alert'">
          </app-sensor-card>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard {
      min-height: 100vh;
      background: #f8f9fa;
    }
    .dashboard-content {
      padding: 2rem;
    }
    .status-summary {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .status-active {
      color: #4CAF50;
      font-weight: bold;
    }
    .sensor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }
  `]
})
export class DashboardComponent {
  lastUpdate = new Date();
  
  sensors: SensorData[] = [
    {
      name: 'Security Camera',
      status: 'Active',
      icon: 'https://cdn-icons-png.flaticon.com/512/3004/3004613.png',
      value: 'Recording',
      trend: 'stable'
    },
    {
      name: 'Temperature',
      status: 'Normal',
      icon: 'https://cdn-icons-png.flaticon.com/512/1843/1843544.png',
      value: '24°C',
      trend: 'up'
    },
    {
      name: 'Gas Detector',
      status: 'Alert',
      icon: 'https://cdn-icons-png.flaticon.com/512/1839/1839433.png',
      value: '150 ppm',
      trend: 'up'
    },
    {
      name: 'Smart Lights',
      status: 'On',
      icon: 'https://cdn-icons-png.flaticon.com/512/702/702814.png',
      value: '80% Brightness',
      trend: 'stable'
    },
    {
      name: 'Motion Sensor',
      status: 'No Movement',
      icon: 'https://cdn-icons-png.flaticon.com/512/2143/2143150.png',
      value: 'Clear',
      trend: 'stable'
    }
  ];
}