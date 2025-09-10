import { Injectable } from '@angular/core';
import {BaseWebAPIHttpService} from './base-webapi-service';
import {delay, Observable, of} from 'rxjs';
import {IConfigModel} from '../../shared/models/config/IConfigModel';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationHttpService extends BaseWebAPIHttpService {

  getConfig(): Observable<IConfigModel> {
   // return this.get<IConfigModel>('');
    return of({ isNiaVerificationEnabled:false,
      isNiraVerificationEnabled:false,
      isOTPEnabled:true} as IConfigModel).pipe(delay(1000));
  }

}
