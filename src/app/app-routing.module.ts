import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01Component } from './components/page01/page01.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { CtrlLogDirective } from './directives/ctrl-log.directive';
import { CtrlBGColorDirective } from './directives/ctrl-bgcolor.directive';
import { CtrlHideDirective } from './directives/ctrl-hide.directive';
import { Page02Component } from './components/page02/page02.component';

const routes: Routes = [
  {
    path: '',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component
  },
  {
    path: '**',
    component: Page01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [
  Page01Component,
  Page02Component,
  MyHeaderComponent,
  MyFooterComponent,
  CtrlLogDirective,
  CtrlBGColorDirective,
  CtrlHideDirective
]
