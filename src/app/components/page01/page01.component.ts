import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss'],
  providers: [HttpFetchService],
})
export class Page01Component implements OnInit {
  pageData = {};

  constructor(
    private _httpSrv: HttpFetchService
  ) { }

  ngOnInit() {
    this.loadPageData();
    // this.pageData = {
    //   title: 'my Title',
    //   body: '<p>asdfasdf</p><p>zzzz</p>'
    // };
  }

  async loadPageData() {
    this.pageData = await this._httpSrv.getJSON('page01');

    // this.pageData = await this._httpSrv.getHttp('navItemList');
  }

  onClick(obj2nd) {
    console.log(obj2nd);
  }
}
