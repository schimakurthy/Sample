import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';

import { AuthGuard } from './shared/auth-guard.service';
import { ViewDataService } from './shared/view-data.service';

import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,   
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,    
    HomeComponent,     
    HeaderComponent,
    SignupComponent
 ],
  providers: [
    ViewDataService,       
    AuthGuard,
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }