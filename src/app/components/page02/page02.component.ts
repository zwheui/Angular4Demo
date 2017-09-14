import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
  providers: [HttpFetchService]
})
export class Page02Component implements OnInit {
  myDate;
  constructor(
    private _httpSrv: HttpFetchService,
  ) { }

  ngOnInit() {
    this.myDate = new Date();
  }

  onSubmit(formValue) {
    // this._httpSrv.addTitleList(formValue.name);
    // console.log(formValue);
    this.addData();
  }

  async addData() {
    const param = new FormData();
    param.append('json', JSON.stringify({
      body: 'new comments',
      postId: 2
    }));
    const url = 'https://my-json-server.typicode.com/zwheui/jsondata/comments';
    // const url = 'http://jsonplaceholder.typicode.com/posts';
    const header = {
      method: 'post',
      // headers: {
      //   "Content-type":"application/x-www-form-urlencoded"
      // },
      body: {
        body: 'new comments 123',
        postId: 2
      }
    };
    try {
      let res = await fetch(url, header);
      let data = await res.json();
      console.log(data);
      // res = await fetch(url);
      // data = await res.json();
      // console.log(data);
      // data.map((item, index) => {
      //   console.log(item);
      // });
      // this.leftNavList = data.slice(0, 4).map(item => item.title);
    } catch (error) {
      console.log(error);
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'fooa',
        body: 'barb',
        userId: 1
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    }).catch(function (e) {
      console.log('Oops, error');
    });
  }
}
