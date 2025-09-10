import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CasaStepperService} from '../../services/casa-stepper/casa-stepper.service';
import { Store } from '@ngrx/store';
import { selectConfigurations} from '../../../../store/configuration/configuration.selectors';
import {IConfigDto} from '../../../../shared/dto/config/IConfigDto';
import {updateApplication} from '../../../../store/application/application.actions';
import {getConfig} from '../../../../store/configuration/configuration.actions';
import {IApplicationDto} from '../../../../shared/dto/application/IApplicationDto';
import {IBasicInformationDto} from '../../../../shared/dto/application/IBasic-informationDto';

@Component({
  standalone: true,
  selector: 'app-basic-info-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./basic-information.component.html'
})
export class BasicInformationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private casaStepperService: CasaStepperService
  ) {
   this.store.select(selectConfigurations).subscribe(x=> console.log(x))
  }



  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const basicInformation: IBasicInformationDto = {} as IBasicInformationDto
      const {firstName,lastName,mobile, email } = this.form.value;

      basicInformation.firstName = firstName;
      basicInformation.lastName = lastName;
      basicInformation.mobile = mobile;
      basicInformation.mobile = email;

      this.store.dispatch(updateApplication({basicInformation}));
      this.casaStepperService.nextPage(true)
  }
}
