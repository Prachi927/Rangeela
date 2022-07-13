import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSigninComponent } from './routing-signin/routing-signin.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingAss1Component } from './routing-ass1/routing-ass1.component';
import { RoutingAss2Component } from './routing-ass2/routing-ass2.component';
import { RoutingAss3Component } from './routing-ass3/routing-ass3.component';
import { RoutingAss4Component } from './routing-ass4/routing-ass4.component';
import { RoutingAss5Component } from './routing-ass5/routing-ass5.component';
import { RoutingRegisterComponent } from './routing-register/routing-register.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataUseComponent } from './data-use/data-use.component';

const routes: Routes = [{
  path:"routing-signin",
  component:RoutingSigninComponent
},
{
  path:"routing-home",
  component:RoutingHomeComponent
},
{
  path:"routing-ass1",
  component:RoutingAss1Component
},
{
  path:"routing-ass2",
  component:RoutingAss2Component
},
{
  path:"routing-ass3",
  component:RoutingAss3Component
},
{
  path:"routing-ass4",
  component:RoutingAss4Component
},
{
  path:"template-form",
  component:TemplateFormComponent
},
{
  path:"reactive-form",
  component:ReactiveFormComponent
},
{
  path:"data-use",
  component:DataUseComponent
},
{
  path:"routing-register",
  component:RoutingRegisterComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
