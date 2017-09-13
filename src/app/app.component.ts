///<reference path="../../typings/globals/jquery/index.d.ts"/>

import { Component, OnInit, HostListener } from '@angular/core';
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
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('leftPanelToggleAnimation', [
      state('false', style({
        width: '1px'
      })),
      state('true', style({
        width: '250px'
      })),
      transition('false <=> true', animate('500ms ease-in'))
    ]),
    trigger('mainPanelToggleAnimation', [
      state('false', style({
        paddingLeft: '0px'
      })),
      state('true', style({
        paddingLeft: '250px'
      })),
      transition('false <=> true', animate('500ms ease-in'))
    ]),
    trigger('leftNavMeetingCenterAnimation', [
      state('false', style({
        height: '0px'
      })),
      state('true', style({

      })),
      transition('false <=> true', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  leftBarStatus: Boolean;
  leftNavToggleClass: string;
  rightMenuStatus: Boolean;
  rightMenuToggleClass: string;
  leftNavMeetingCenter: string;

  ngOnInit() {
    this.rightMenuToggleClass = '';
    this.rightMenuStatus = false;
    this.leftNavToggleClass = 'toggle';
    this.leftBarStatus = true;
    this.leftNavMeetingCenter = 'true';
  }

  constructor() {

  }

  ToggleLeftNav(): void {
    this.leftBarStatus = !this.leftBarStatus;
    if (this.leftBarStatus) {
      this.leftNavToggleClass = 'toggle';
    } else {
      this.leftNavToggleClass = '';
    }
  }

  ToggleRightMenu(event: Event, status: number): void {
    this.rightMenuStatus = !this.rightMenuStatus;
    if (this.rightMenuStatus && status === 1) {
      this.rightMenuToggleClass = 'toggle';
      this.rightMenuStatus = true;
    } else {
      this.rightMenuToggleClass = '';
      this.rightMenuStatus = false;
    }
  }

  LeftNavMenuToggle(titleName: string): void {
    if (this.leftNavMeetingCenter === 'true') {
      this.leftNavMeetingCenter = 'false';
    } else {
      this.leftNavMeetingCenter = 'true';
    }
  }

  @HostListener('document: click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    let parentFound = false;
    while (target != null && !parentFound) {
      if ($(target).hasClass('header-right-panel')) {
        parentFound = true;
      }
      target = target.parentElement;
    }
    if (!parentFound) {
      this.ToggleRightMenu(null, -1);
      event.stopPropagation();
    }
  }
}
