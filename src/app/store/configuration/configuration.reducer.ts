import { createReducer, on } from '@ngrx/store';
import {initialConfigurationState} from './configuration.state';
import {getConfig,getConfigSuccess} from './configuration.actions';

export const configurationReducer = createReducer(
  initialConfigurationState,
  on(getConfig, (state) => ({
    ...state,
    loading: true,
    isSuccess: false
  })),
  on(getConfigSuccess, (state,configuration) => ({
    ...state,
    loading: false,
    isSuccess: true,
    configuration
  }))
);
