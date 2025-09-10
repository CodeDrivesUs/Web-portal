import { Injectable } from '@angular/core';
import { ConfigurationHttpService} from '../http-service/configuration-http-service';
import {IConfigDto} from '../../shared/dto/config/IConfigDto';
import {map, Observable} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ConfigurationAppService {
  constructor(private configurationHttpService: ConfigurationHttpService) {}

  getConfig(): Observable<IConfigDto> {
    return this.configurationHttpService.getConfig().pipe(
      map(config => Object.assign({}, config)));
  }
}
