import { Component, OnInit, Inject, Input } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
	@Input() showLeftNav: boolean;

  constructor(@Inject(DataService) private leftNave) { 
  	console.log("constructor of leftnav...");
  	console.log(leftNave);
  }

  ngOnInit() {
  }

  menuClick(event) {
    console.log(event);

    for(let o of this.leftNave.data){
    	if(event.target.innerText == o.title){
    		o.show = !o.show;
    	}
    	else{
    		o.show = false;
    	}
    }
  }
}
