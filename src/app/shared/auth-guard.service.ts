import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {ViewDataService} from './view-data.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router, private viewDataService: ViewDataService){}

    canActivate(){        
        if(this.viewDataService.userCredentials != null || this.viewDataService.userCredentials != undefined){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}