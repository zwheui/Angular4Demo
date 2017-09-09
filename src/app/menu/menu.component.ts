import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string;
  url: string;
  type:string;
  items?: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
 
})
export class MenuComponent implements OnInit {

  menuObj: MenuItem[];

  constructor() {
    this.menuObj = [
      {
        "name": "Meeting Center",
        "url": "meeting",
        "type":"",
        "items": [
          {
            "name": "Meetings",
            "url": "",
            "type":"title"

          },
          {
            "name": "Meet Now",
            "url": "meetingnow",
            "type":"link"

          },
          {
            "name": "Schedule",
            "url": "schedule",
            "type":"link"
          },
          {
            "name": "My Calendar",
            "url": "calendar",
            "type":"link"
          },
          {
            "name": "Find Events",
            "url": "findevent",
            "type":"link"
          }
        ]
      },
      {
        "name": "Reports",
        "url": "reports",
        "type":"",
        "items": [
          {
            "name": "Reporting",
            "url": "",
            "type":"title"
          },
          {
            "name": "My Usage",
            "url": "usage",
            "type":"link"
          }
        ]
      },
      {
        "name": "Support",
        "url": "support",
        "type":"",
        "items": [
          {
            "name": "Contact",
            "url": "contact",
            "type":"link"
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }


}
