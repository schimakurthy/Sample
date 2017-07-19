import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ViewDataService } from '../shared/view-data.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent{  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private viewDataService: ViewDataService
  ) { } 
}