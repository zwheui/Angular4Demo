import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

	today = (new Date()).getDate().toString();
  constructor() { }

  ngOnInit() {
  }

}
