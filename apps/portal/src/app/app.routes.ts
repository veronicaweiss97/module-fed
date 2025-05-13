import { CookiesComponent } from '../components/cookies/cookies.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'user',
    loadChildren: () => import('user/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'cookies',
    component: CookiesComponent,
  },
  {
    path: '',
    component: MainHeaderComponent,
  },
];
