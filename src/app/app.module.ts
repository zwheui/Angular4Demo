import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtrlDemoDirective } from './directives/ctrl-demo.directive';
import { IconItemComponent } from './components/home/icon-item/icon-item.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CtrlDemoDirective,
    IconItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
