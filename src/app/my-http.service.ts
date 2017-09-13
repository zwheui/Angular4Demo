import { Injectable } from '@angular/core';

@Injectable()
export class MyHttpService {
  myTitleList: string[] = ['New Title 01', 'New Title 02'];
  constructor() { }
  addTitleList(newTitle) {
    this.myTitleList.push(newTitle);
  }
  onLoadData() {

    return this.myTitleList;
    // const url = 'http://jsonplaceholder.typicode.com/posts';
    // const header = {
    //   method: 'get',
    //   // headers: {
    //   //   "Content-type":"application/x-www-form-urlencoded"
    //   // },
    // };

    // try {
    //   const res = await fetch(url, header);
    //   const data = await res.json();
    //   // console.log(data.slice(0, 5));
    //   data.slice(0, 4).map((item, index) => {
    //     console.log(item);
    //   });

    //   leftList = data.slice(0, 10).map(item => item.title);
    //   console.log('leftList', leftList);

    // } catch (error) {
    //   console.log(error);
    // }

    // fetch(url).then((res) => {
    //   console.log(res.json());
    //   return res.json();
    // }).then((data) => {
    //   console.log(data);
    // }).catch((err) => {
    //   console.log(err);
    // });
  }
}
