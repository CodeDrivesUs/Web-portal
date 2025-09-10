import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {IApplicationDto} from '../../../../shared/dto/application/IApplicationDto';
import {Store} from '@ngrx/store';
import {selectApplication, selectApplicationState} from '../../../../store/application/application.selectors';
import {updateApplication} from '../../../../store/application/application.actions';
import {CasaStepperService} from '../../services/casa-stepper/casa-stepper.service';

@Component({
  standalone: true,
  selector: 'app-personal-info-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./personal-information.component.html'
})
export class PersonalInfomationComponent implements OnInit {
  application:IApplicationDto ={} as IApplicationDto ;

  constructor( private store: Store, private casaStepperService: CasaStepperService) {
    this.store.select(selectApplication).subscribe(application => this.application = application)
  }

  ngOnInit(): void {
    this.store.select(selectApplication).subscribe(application => this.application = application)
  }
  back(){
    this.casaStepperService.nextPage(false);
  }

}
