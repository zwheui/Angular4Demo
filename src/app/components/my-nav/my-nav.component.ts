import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { MyHttpService } from '../../my-http.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  providers: [MyHttpService],
  animations: [
    trigger('myAnimationEC', [

      state('true', style({
        transform: 'translate(0,0)',
        opacity: 1,
        // display: 'inherit'
      })),
      state('false', style({
        transform: 'translate(-20vw,0)',
        opacity: 0,
        // display: 'none'
      })),

      transition('true <=> false', animate('800ms ease-in')),
    ])
  ]
})

export class MyNavComponent implements OnInit {
  pageData: IMyNav[];
  leftNavList = ['title 01', 'title 02', 'title 03'];
  @Input() isShow = true;

  constructor(
    private _httpSrv: MyHttpService,
  ) { }

  ngOnInit() {
    // this.leftNavList = this._httpSrv.onLoadData();
    // this.onLoadData();
  }

  // async onLoadData() {
  //   // const url = 'http://jsonplaceholder.typicode.com/posts';
  //   const url = 'https://my-json-server.typicode.com/zwheui/jsondata/comments';
  //   const header = {
  //     method: 'get',
  //     // headers: {
  //     //   "Content-type":"application/x-www-form-urlencoded"
  //     // },
  //   };

  //   try {
  //     const res = await fetch(url, header);
  //     const data = await res.json();
  //     // console.log(data.slice(0, 5));
  //     data.slice(0, 4).map((item, index) => {
  //       console.log(item);
  //     });

  //     this.leftNavList = data.slice(0, 10).map(item => item.body);

  //   } catch (error) {
  //     console.log(error);
  //   }

  //   fetch(url).then((res) => {
  //     // console.log(res.json());
  //     return res.json();
  //   }).then((data) => {
  //     console.log(data);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

}

interface IMyNav {
  title: string;
  childNav: IMyNav[];
}


