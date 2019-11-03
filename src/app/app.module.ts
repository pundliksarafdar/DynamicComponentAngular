import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormComponent1Component } from './form-component1/form-component1.component';
import { FormComponent2Component } from './form-component2/form-component2.component';
import { FormComponent3Component } from './form-component3/form-component3.component';
import {DynamicContentResolverServiceService}  from './../../service/dynamic-content-resolver-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    FormComponent1Component,
    FormComponent2Component,
    FormComponent3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FormComponentComponent,FormComponent1Component,FormComponent2Component,FormComponent3Component]
})
export class AppModule { }
