import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-otherpages',
  templateUrl: './otherpages.component.html',
  styleUrls: ['./otherpages.component.css']
})
export class OtherpagesComponent {
  
  private pageName;

  constructor(private route:ActivatedRoute) { }

  // private ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     this.id = +params['id']; // (+) converts string 'id' to a number
  //  });
  // }

  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
