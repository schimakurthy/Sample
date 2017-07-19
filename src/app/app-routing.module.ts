import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';

import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
    // { path: 'login/:id', component: LoginComponent },  
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },   
    { path: 'login', component: LoginComponent},
    {path:'home',component:HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }