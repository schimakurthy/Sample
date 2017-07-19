import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { User } from './user.type';
import { ViewDataService } from '../shared/view-data.service';

declare var $: any;

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  private model = new User('', '');  
  submitted = false;
  loginInvalid = false; 

  constructor(   
    private viewDataService: ViewDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onSubmit() {
    this.submitted = true;
  }

  onLogin() {
    this.onSubmit();  
    if(this.model.userName == 'Admin' && this.model.passWord == 'Admin@me')  {
      this.loginInvalid = false;
      this.viewDataService.loggedIn = true;
      this.viewDataService.userCredentials = {
        "username":this.model.userName,
        "password":this.model.passWord
      }
      this.gotoHome();
    }
    else{
      this.loginInvalid = true;
      this.viewDataService.loggedIn = false;
      this.model.userName = '';
      this.model.passWord = '';
    }
  }

  gotoHome(): void {    
      let link = ['/home'];
      this.router.navigate(link);
  }
}