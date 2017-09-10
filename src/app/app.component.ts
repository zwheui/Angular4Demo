import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  leftBarStatus: Boolean;
  leftNavToggleClass: string;
  rightMenuStatus: Boolean;
  rightMenuToggleClass: string;

  ngOnInit() {
    this.rightMenuToggleClass = 'toggle';
    this.rightMenuStatus = false;
    this.leftNavToggleClass = '';
    this.leftBarStatus = true;
  }

  constructor() {

  }

  ToggleLeftNav(): void {
    this.leftBarStatus = !this.leftBarStatus;
    if (this.leftBarStatus) {
      this.leftNavToggleClass = '';
    } else {
      this.leftNavToggleClass = 'toggle';
    }
  }

  ToggleRightMenu(): void {
    this.rightMenuStatus = !this.rightMenuStatus;
    if (this.rightMenuStatus) {
      this.rightMenuToggleClass = '';
    } else {
      this.rightMenuToggleClass = 'toggle';
    }
  }
}
