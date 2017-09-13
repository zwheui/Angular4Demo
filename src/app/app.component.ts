import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShowLeftNav = true;
  headerText: string;

  onClick_HeaderBar(value) {
    console.log('onClick_HeaderBar', value);
    this.headerText = value;
    // this.isShowLeftNav = value;
    this.isShowLeftNav = !this.isShowLeftNav;
  }
}
