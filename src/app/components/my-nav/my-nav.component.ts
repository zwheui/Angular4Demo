import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HttpFetchService } from '../../services/http-fetch.service';
import { INavItem } from '../../my-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  providers: [HttpFetchService],
  animations: [
    trigger('myAnimationEC', [

      state('true', style({
        transform: 'translate(0,0)',
        opacity: 1,
        display: 'block'
      })),
      state('false', style({
        transform: 'translate(-250px,0)',
        opacity: 0,
        display: 'none'
      })),

      transition('true <=> false', animate('800ms ease-in')),
    ])
  ]
})

export class MyNavComponent implements OnInit {
  @Input() isShow = true;

  pageData: INavItem[];

  constructor(
    private _route: ActivatedRoute,
    private _httpSrv: HttpFetchService,
  ) { }

  ngOnInit() {
    this.loadPageData();
  }

  async loadPageData() {
    this.pageData = await this._httpSrv.getJSON('navItemList');

    // this.pageData = await this._httpSrv.getHttp('navItemList');

    // get Param and update pageData
    const selNavItem = this._route.snapshot.queryParams['navItem'];

    if (selNavItem) {
      this.pageData.map(item => {
        item.isShow = item.link.name === selNavItem;
      });
    }
  }

  onClick_NavItem(item) {
    item.isShow = !item.isShow;
  }
}



