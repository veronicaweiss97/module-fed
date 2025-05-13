import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalUiLibComponent } from '@libs/portal-ui-lib';

@Component({
  selector: 'app-main-header',
  imports: [CommonModule, PortalUiLibComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {}
