import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../components/admin-dashboard/admin-dashboard.component';

@Component({
  imports: [CommonModule, AdminDashboardComponent],
  selector: 'app-admin-entry',
  template: `<app-admin-dashboard></app-admin-dashboard>`,
})
export class RemoteEntryComponent {}
