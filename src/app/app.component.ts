import { Component,
  NgModule,
  OnInit,
  Inject,
  ViewChild,
  ViewContainerRef } from '@angular/core';


import {FormComponentComponent} from './form-component/form-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dynapp';

  constructor(){
      
  }

  ngOnInit(){
    
  }
}


