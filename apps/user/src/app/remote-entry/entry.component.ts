import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from '../../components/welcome-banner/welcome-banner.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  imports: [CommonModule, WelcomeBannerComponent, DashboardComponent],
  selector: 'app-user-entry',
  template: `<app-welcome-banner></app-welcome-banner>
    <app-dashboard></app-dashboard>`,
})
export class RemoteEntryComponent {}
