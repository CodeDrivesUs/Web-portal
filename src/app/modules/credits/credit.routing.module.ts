import { provideRouter, Route } from '@angular/router';
import {CreditComponent} from './credit.component';

export const creditRoutes: Route[] = [
  {
    path: 'credit',
    component: CreditComponent,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      {
        path: 'basic',
        loadComponent: () =>
          import('../credits/pages/basic-information/basic-information.component').then(m => m.BasicInformationComponent),
      },
      // {
      //   path: 'summary',
      //   loadComponent: () =>
      //     import('../user-contact/user-contact.component').then(m => m.UserContactComponent),
      // }
    ]
  }
];
