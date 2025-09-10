import { createFeatureSelector, createSelector } from '@ngrx/store';
import  {IApplicationState} from "./application.state";

export const selectApplicationState = createFeatureSelector<IApplicationState>('application');

export const selectApplication = createSelector(
    selectApplicationState,
    state => state.application
);

