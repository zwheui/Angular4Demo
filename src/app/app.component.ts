import { Component, Inject } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Keen's Angular site";
  user = "Keen Guo";
  showLeftNav = true;
  

  constructor(
    @Inject(DataService) private leftNave
  ) {
    console.log(leftNave);

    let map = new Map<string, string>();
    map.set("key", "value");
    console.log(map.get("key"));
  }

  toggleClick(event) {
    console.log(event);
    console.log("toggle clicked!");
    this.showLeftNav = !this.showLeftNav;

    console.log(this.showLeftNav);
  }
}
