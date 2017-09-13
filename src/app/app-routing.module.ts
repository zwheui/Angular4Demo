import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01Component } from './components/page01/page01.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { CtrlLogDirective } from './directives/ctrl-log.directive';
import { CtrlBGColorDirective } from './directives/ctrl-bgcolor.directive';
import { CtrlHideDirective } from './directives/ctrl-hide.directive';
import { Page02Component } from './components/page02/page02.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page01',
    pathMatch: 'full'
  },
  {
    path: 'page01',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component,
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Page02Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard
  ],
})
export class AppRoutingModule { }

export const routingComponents = [
  Page01Component,
  Page02Component,
  MyHeaderComponent,
  MyFooterComponent,
  CtrlLogDirective,
  CtrlBGColorDirective,
  CtrlHideDirective,
  MyNavComponent,
];
