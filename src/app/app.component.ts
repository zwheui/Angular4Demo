import { Component,Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'app';
  isShowNav: boolean=true;
  isListShow: boolean=false;

    onClick_HeaderBar()
   {
       this.isShowNav=!this.isShowNav;
   }

    Loginover()
  {
    this.isListShow=!this.isListShow;
  }

}
