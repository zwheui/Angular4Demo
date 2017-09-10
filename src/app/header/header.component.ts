import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() oBarClick=new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("23");
    this.oBarClick.emit();
  } 

}
