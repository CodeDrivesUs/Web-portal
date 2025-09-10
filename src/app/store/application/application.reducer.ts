import { createReducer, on } from '@ngrx/store';
import {initialApplicationState} from './application.state';
import {updateApplication} from './application.actions';

export const applicationReducer = createReducer(
  initialApplicationState,
  on(updateApplication, (state,application) => ({
    ...state,
    application
  }))
);
