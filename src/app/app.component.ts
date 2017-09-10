import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShowLeftNav: boolean = true;

  onClick_HeaderBar(value) {
    console.log('onClick_HeaderBar', value);
    this.isShowLeftNav = !this.isShowLeftNav;
  }

 // leftNavList = ['title 01', 'title 02', 'title 03'];
}
