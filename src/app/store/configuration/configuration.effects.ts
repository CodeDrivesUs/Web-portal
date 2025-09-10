import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfigurationAppService } from '../../core/app-service/configuration-app-service';
import { getConfig, getConfigSuccess } from './configuration.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ConfigurationEffects {
  private readonly actions$ = inject(Actions);
  private readonly configurationAppService = inject(ConfigurationAppService);

  getConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getConfig),
      mergeMap(() =>
        this.configurationAppService.getConfig().pipe(
          map(config => getConfigSuccess(config)),
          catchError(error =>
            of({ type: '[Configuration] Get Config Failure' })
          )
        )
      )
    )
  );
}
