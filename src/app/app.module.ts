import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
