import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IConfigurationState} from './configuration.state';

export const selectConfigurationState = createFeatureSelector<IConfigurationState>('configuration');

export const selectConfigurations = createSelector(
  selectConfigurationState,
  state => state.configuration
);

export const selectIsLoading = createSelector(
  selectConfigurationState,
  state => state.loading
);

export const selectIsSuccess = createSelector(
  selectConfigurationState,
  state => state.isSuccess
);
