import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {BasicInformationComponent} from './pages/basic-information/basic-information.component';

import {ReactiveFormsModule} from '@angular/forms';
import {CasaStepperService} from './services/casa-stepper/casa-stepper.service';
import {PersonalInfomationComponent} from './pages/personal-information/personal-infomation.component';

@Component({
  selector: 'app-casa',
  standalone: true,
  templateUrl:'./casa.component.html',
  styleUrls: ['./casa.component.css'],
  imports: [CommonModule, RouterModule, BasicInformationComponent,PersonalInfomationComponent,ReactiveFormsModule]
})

export class CasaComponent implements OnInit{
  applicationStep:number = 0;
  applicationSteps = ['Basic Information','Summary'];
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
