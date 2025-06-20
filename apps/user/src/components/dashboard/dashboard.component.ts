import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public activeTab: number = 1;

  public setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }
}
