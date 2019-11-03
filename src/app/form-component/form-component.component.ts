import { Component, OnInit, ViewContainerRef,Inject } from '@angular/core';
import {DynamicContentResolverServiceService}  from './../../../service/dynamic-content-resolver-service.service';
import {FormComponent1Component} from './../form-component1/form-component1.component';
import {FormComponent2Component} from './../form-component2/form-component2.component';
import {FormComponent3Component} from './../form-component3/form-component3.component';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(@Inject(ViewContainerRef) viewContainerRef,public service: DynamicContentResolverServiceService ) { 
    service.setRootViewContainerRef(viewContainerRef)    
  }

  appendForm1(){
    this.service.addDynamicComponent(FormComponent1Component)
  }

  appendForm2(){
    this.service.addDynamicComponent(FormComponent2Component)
  }

  appendForm3(){
    this.service.addDynamicComponent(FormComponent3Component)
  }

  ngOnInit() {
  }

}
