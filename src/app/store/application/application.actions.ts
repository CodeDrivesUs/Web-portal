import { createAction, props } from '@ngrx/store';
import {IApplicationDto} from '../../shared/dto/application/IApplicationDto';

export const UPDATE_APPLICATION = 'update-application';

export const updateApplication = createAction(
  UPDATE_APPLICATION,
  props<IApplicationDto>()
);
