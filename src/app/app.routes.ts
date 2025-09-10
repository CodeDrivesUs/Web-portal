import { Routes } from '@angular/router';
import {casaRoutes} from './modules/casa/casa.routing.module';
import {creditRoutes} from './modules/credits/credit.routing.module';

export const routes: Routes = [
  ...casaRoutes,
  ...creditRoutes,
  { path: '', redirectTo: 'casa', pathMatch: 'full' }
];
