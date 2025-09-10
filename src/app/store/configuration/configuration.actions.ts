import { createAction, props } from '@ngrx/store';
import {IConfigDto} from '../../shared/dto/config/IConfigDto';

export const GET_CONFIGURATION = 'get-country-config';
export const GET_CONFIGURATION_SUCCESS = 'get-country-config-SUCCESS';

export const getConfig = createAction(GET_CONFIGURATION);

export const getConfigSuccess = createAction(
 GET_CONFIGURATION_SUCCESS,
  props<IConfigDto>()
);
