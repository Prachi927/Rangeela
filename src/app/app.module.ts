import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingSigninComponent } from './routing-signin/routing-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingAss1Component } from './routing-ass1/routing-ass1.component';
import { RoutingAss2Component } from './routing-ass2/routing-ass2.component';
import { RoutingRegisterComponent } from './routing-register/routing-register.component';
import { RoutingAss3Component } from './routing-ass3/routing-ass3.component';
import { RoutingAss4Component } from './routing-ass4/routing-ass4.component';
import { RoutingAss5Component } from './routing-ass5/routing-ass5.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataUseComponent } from './data-use/data-use.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    RoutingHomeComponent,
    RoutingSigninComponent,
    RoutingAss1Component,
    RoutingAss2Component,
    RoutingRegisterComponent,
    RoutingAss3Component,
    RoutingAss4Component,
    RoutingAss5Component,
    TemplateFormComponent,
    ReactiveFormComponent,
    DataUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
