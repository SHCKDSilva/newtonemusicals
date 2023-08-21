import { LayoutComponent } from './layout/layout.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];
