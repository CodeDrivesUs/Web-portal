import { ActionReducerMap } from '@ngrx/store';
import {configurationReducer} from "./configuration/configuration.reducer";
import {applicationReducer} from "./application/application.reducer";

export interface AppState {
    configuration: ReturnType<typeof configurationReducer>;
    application: ReturnType<typeof applicationReducer>;
}

export const rootReducer: ActionReducerMap<AppState> = {
    configuration:configurationReducer,
    application:applicationReducer
};
