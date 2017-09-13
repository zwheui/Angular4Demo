import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss']
})
export class Page01Component implements OnInit {
  pageData;
  isShowChk: boolean;
  myText: string;

  constructor() { }

  ngOnInit() {
    this.isShowChk = true;
    this.pageData = {
      title: 'my Title'
    };
    this.myText = 'my Text';
  }
  onClick(obj2nd) {
    console.log(obj2nd);
  }
}
