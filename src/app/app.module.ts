import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtrlDemoDirective } from './directives/ctrl-demo.directive';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import {fontawesome}  from 'fontawesome';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CtrlDemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
