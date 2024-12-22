import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SensorData {
  name: string;
  status: string;
  icon: string;
  value?: string;
  trend?: 'up' | 'down' | 'stable';
}

@Component({
  selector: 'app-sensor-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sensor-card" [class.alert]="isAlert">
      <div class="sensor-icon">
        <img [src]="data.icon" [alt]="data.name">
      </div>
      <h3>{{data.name}}</h3>
      <p class="status">{{data.status}}</p>
      <div class="value" *ngIf="data.value">
        {{data.value}}
        <span class="trend" *ngIf="data.trend">
          {{getTrendIcon(data.trend)}}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .sensor-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
      border: 2px solid transparent;
    }
    .sensor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .sensor-card.alert {
      border-color: #ff4444;
      animation: pulse 2s infinite;
    }
    .sensor-icon img {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
    }
    .status {
      color: #666;
      font-size: 0.9rem;
    }
    .value {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2196F3;
      margin-top: 0.5rem;
    }
    .trend {
      margin-left: 0.5rem;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(255,68,68,0.4); }
      70% { box-shadow: 0 0 0 10px rgba(255,68,68,0); }
      100% { box-shadow: 0 0 0 0 rgba(255,68,68,0); }
    }
  `]
})
export class SensorCardComponent {
  @Input() data!: SensorData;
  @Input() isAlert = false;

  getTrendIcon(trend: 'up' | 'down' | 'stable'): string {
    const icons = {
      up: '↑',
      down: '↓',
      stable: '→'
    };
    return icons[trend];
  }
}