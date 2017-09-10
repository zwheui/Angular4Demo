import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  @Output() onBarClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onClick(value) {
    console.log(value);
    this.onBarClick.emit(value);
  }

  /*async addData(){
    const param = new FormData();
    param.append('json',JSON.stringify({
      title:'foo123',
      body:'bar',
      userid:2
    }));
    const url = 'http://jsonplaceholder.typicode.com/posts';
    const header = {
      method:'post',
      body:{
        title:'foo123',
        body:'bar',
        userid:2
      }
    };
    try{
      let res=await fetch(url,header);
      let data = await res.json;
      console.log(data);
      res = await fetch(url);
    }
    finally{

    }
  }*/
}
