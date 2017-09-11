import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import header_logoPath from '../../common/const';


@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  

})

export class MyHeaderComponent implements OnInit {
  pwclogopath;
  UserName:string;
  newtitle:string;
  @Output() oFBarClick=new EventEmitter<string>();
  @Output() oMousehover=new EventEmitter<string>();
  constructor() { 
    /*this.newtitle=header_logoPath.title;*/
  }

  ngOnInit() {
     this.pwclogopath={
       logopath:'../../assets/pwclogo.png'
     };
     this.UserName="Flower Yuan";  
  }

  onClick(){
    this.oFBarClick.emit();  
  }

  onMouseover(){
    this.oMousehover.emit();
  }


}
