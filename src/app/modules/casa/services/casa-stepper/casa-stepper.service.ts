import { Injectable } from '@angular/core';

import {BehaviorSubject, map, Observable} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CasaStepperService {
  applicationStep = new BehaviorSubject<number>(0); // initial value = 0

  nextPage(foward:boolean){
    if(foward){
      const nextstep = this.applicationStep.getValue() +1;
      this.applicationStep.next(nextstep)
    }
    else{
      const nextstep = this.applicationStep.getValue() -1;
      this.applicationStep.next(nextstep)
    }
  }

  goToStep(step:number){
    this.applicationStep.next(step);
  }
}
