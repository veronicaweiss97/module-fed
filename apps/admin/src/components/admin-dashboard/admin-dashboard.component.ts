import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonBorderDirective } from '@module-fed/portal-directives';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, NeonBorderDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {}
