import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ViewDataService } from '../shared/view-data.service';

@Component({
    selector: 'header-app',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    loggedIn: boolean;
    firstName: string;
    lastName: string;
    role: string;
    hasLegends: string;
    isSubmitChargesVisible = false;
    isLegendsCertifiedVisible = false;
    isLegendsAssignedVisible = false;
    showSubmitChargesMessage: string;
    showLegendsCertifiedMessage: string;
    showLegendsAssignedMessage: string;
    isDisabled = true;
   
    componentLoaded:any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private viewDataService: ViewDataService      
    ) {       
        this.componentLoaded=route.component['name'];       
        this.loggedIn = this.viewDataService.loggedIn;
    }   

    ngOnInit() { 
        if (this.viewDataService.userCredentials == null || this.viewDataService.userCredentials == undefined) {
            this.router.navigate(['login']);
        }
    }

    logout(): void {        
        this.viewDataService.userCredentials = '';
        this.viewDataService.loggedIn = false;
    }
}