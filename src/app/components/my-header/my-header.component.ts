import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HttpFetchService } from '../../services/http-fetch.service';
import { ILink } from '../../my-interface';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  providers: [HttpFetchService],
  animations: [
    trigger('myAnimationScale', [

      state('true', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('false', style({
        transform: 'scale(1.2)',
        opacity: 0.8,
      })),

      transition('true <=> false', animate('800ms ease-in')),
    ]),
  ]
})
export class MyHeaderComponent implements OnInit {
  @Output() oBarClick = new EventEmitter<string>();
  pageData: ILink[];

  constructor(
    private _httpSrv: HttpFetchService,
  ) {
  }

  ngOnInit() {
    this.loadPageData();
  }

  async loadPageData() {
    // this.pageData = await this._httpSrv.getJSON('menu');
    this.pageData = await this._httpSrv.getHttp('menu');
  }

  onClick() {
    this.oBarClick.emit();
  }
}
