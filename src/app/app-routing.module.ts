import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { LoginlistComponent } from './components/loginlist/loginlist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: '',
    component: HomeComponent
  },
   {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents=[
 MyHeaderComponent,
 HighlightDirective,
 MyNavComponent,
 HomeComponent,
 MyFooterComponent,
 LoginlistComponent
]
