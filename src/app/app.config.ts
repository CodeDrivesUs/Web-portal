import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import {rootReducer} from './store/app.reducer';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {RootEffects} from './store/app.effects';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(rootReducer),
    provideEffects(RootEffects),
    provideAnimations()
  ]
};
