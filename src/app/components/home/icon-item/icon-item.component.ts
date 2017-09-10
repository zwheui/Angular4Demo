import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.scss']
})
export class IconItemComponent implements OnInit {
  iconObjectList: IconObject[] = [];

  constructor() { }

  ngOnInit() {
    this.iconObjectList.push({
      Title: 'Meet Now',
      FontName: 'fa-users'
    });

    this.iconObjectList.push({
      Title: 'My Calendar',
      FontName: 'fa-calendar-o'
    });

    this.iconObjectList.push({
      Title: 'Schedule',
      FontName: 'fa-tasks'
    });
  }

  showName(): void {
    console.log('hi');
  }
}

export interface IconObject {
   Title: string;
   FontName: string;
}


