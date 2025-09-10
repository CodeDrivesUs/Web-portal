import { provideRouter, Route } from '@angular/router';
import {CasaComponent} from './casa.component';

export const casaRoutes: Route[] = [
  {
    path: 'casa',
    component: CasaComponent,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      {
        path: 'basic',
        loadComponent: () =>
          import('../casa/pages/basic-information/basic-information.component').then(m => m.BasicInformationComponent),
      },
      // {
      //   path: 'summary',
      //   loadComponent: () =>
      //     import('../user-contact/user-contact.component').then(m => m.UserContactComponent),
      // }
    ]
  }
];
