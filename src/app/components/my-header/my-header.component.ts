import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HttpFetchService } from '../../services/http-fetch.service';

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
  menuList;

  constructor(
    private _httpSrv: HttpFetchService,
  ) {
    this.menuList = [];
  }

  ngOnInit() {
    this.loadMenu();
  }

  async loadMenu() {
    this.menuList = await this._httpSrv.getJSON('menu');
    // this.menuList = await this._httpSrv.getHttp('menu');
  }

  onClick() {
    this.oBarClick.emit();
  }

  // async addData() {
  //   const param = new FormData();
  //   param.append('json', JSON.stringify({
  //     title: 'foo123',
  //     body: 'bar',
  //     userId: 2
  //   }));
  //   const url = 'http://jsonplaceholder.typicode.com/posts';
  //   const header = {
  //     method: 'post',
  //     // headers: {
  //     //   "Content-type":"application/x-www-form-urlencoded"
  //     // },
  //     body: {
  //       title: 'foo123',
  //       body: 'bar',
  //       userId: 2
  //     }
  //   };
  //   try {
  //     let res = await fetch(url, header);
  //     let data = await res.json();
  //     console.log(data);
  //     res = await fetch(url);
  //     data = await res.json();
  //     // console.log(data.slice(0, 5));
  //     data.map((item, index) => {
  //       console.log(item);
  //     });
  //     // this.leftNavList = data.slice(0, 4).map(item => item.title);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
