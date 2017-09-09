import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { trigger,state,style,transition,animate } from '@angular/animations'
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('menuAnimation',[
      state('true',style({
        transform:'translate(0,0)',
        opacity:1
        
      })),
      state('false',style({
        transform:'translate(-20vw,0)',
        opacity:0,
        width:0
      })),
      transition('true <=> false',animate('800ms ease-in'))
    ])

  ]
})
export class AppComponent {
  menushow:boolean=true;
  onClick_HeaderBar(){
    this.menushow=!this.menushow;

  }
}
