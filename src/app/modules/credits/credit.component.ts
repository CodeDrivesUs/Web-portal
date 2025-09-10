import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {BasicInformationComponent} from './pages/basic-information/basic-information.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CasaStepperService} from './services/casa-stepper/casa-stepper.service';
import {PersonalInfomationComponent} from './pages/personal-information/personal-infomation.component';

@Component({
  selector: 'app-credit',
  standalone: true,
  templateUrl:'./credit.component.html',
  styleUrls: ['./credit.component.css'],
  imports: [CommonModule, RouterModule, BasicInformationComponent,PersonalInfomationComponent,ReactiveFormsModule]
})

export class CreditComponent implements OnInit{
  applicationStep:number = 0;
  applicationSteps = ['Basic Information','Personal Information','Financial Information'];
  constructor(private casaStepperService: CasaStepperService) {
  }

  ngOnInit(): void {
    this.casaStepperService.applicationStep.subscribe(step=> {
      this.applicationStep =step;
    })
  }

  goToStep(index: number) {
    this.casaStepperService.goToStep(index);
  }
}
