import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { Register } from './register.type';
import { ViewDataService } from '../shared/view-data.service';

declare var $: any;

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})

export class SignupComponent {
  private model = new Register('', '', '', '', '', '', '', '', '', '', '', '');
  submitted = false;
  registerInvalid = false;

  constructor(
    private viewDataService: ViewDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onSubmit() {
    this.submitted = true;
  }

  onSignup(isValid: boolean) {
    console.log('signup')
    this.onSubmit();
    if (isValid) {
      this.gotoLogin();
    }
  }

  formatPhone(contactPhone: any) {
    if (contactPhone != '') {
      contactPhone = contactPhone.replace(/-|\s/g, "");
      if (contactPhone.length == 10)
        this.model.phone = contactPhone.substr(0, 3) + " " + contactPhone.substr(3, 3) + "-" + contactPhone.substr(6);
      if (contactPhone.length > 10 && contactPhone.length < 12)
        return;
    }
  }

  gotoLogin(): void {
    let link = ['/login'];
    this.router.navigate(link);
  }
}