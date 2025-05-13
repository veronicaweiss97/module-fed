import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from '../../components/welcome-banner/welcome-banner.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { PortalUiLibComponent } from '@module-fed/portal-ui-lib';

@Component({
  imports: [
    CommonModule,
    WelcomeBannerComponent,
    DashboardComponent,
    PortalUiLibComponent,
  ],
  selector: 'app-user-entry',
  template: `<lib-portal-ui-lib></lib-portal-ui-lib>
    <app-welcome-banner></app-welcome-banner>
    <app-dashboard></app-dashboard>`,
})
export class RemoteEntryComponent {}
