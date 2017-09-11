import { Component, OnInit,Input} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  animations:[
       trigger('toggleState',[
         state('true', style({transform:'translate(0,0)', opacity:1})),
         state('false', style({transform:'translate(-20vw,0)'})),
         transition('true=>false',animate('300ms'))
       ])
  ]
})
export class MyNavComponent implements OnInit {
 @Input() isShow: boolean=true;
 @Input() isOpenFirst: boolean=true;
 @Input() isOpenSecond: boolean=false;
 @Input() isOpenThird: boolean=false;
 listNavData: string[]=[];


  constructor() { }

  ngOnInit() {
    this.onLoadDate();
  }

  onTitleClick(event){
     let target = event.target || event.srcElement || event.currentTarget;
     let idAttr = target.innerText;
     if(idAttr=="Meeting Center")
     {   
        this.isOpenFirst=true;
         this.isOpenSecond=false;
         this.isOpenThird=false;
     }
      if(idAttr=="Reports")
     {   
        this.isOpenSecond=true;
          this.isOpenThird=false;
          this.isOpenFirst=false;
     }
      if(idAttr=="Support")
     {   
        this.isOpenSecond=false;
         this.isOpenThird=true;
          this.isOpenFirst=false;
     }
  
  }

  getStatus(){
     if(this.isOpenFirst==true && this.isOpenSecond==false && this.isOpenThird==false){
       return "bar-content OpenFirst";
     }
     else if(this.isOpenFirst==false && this.isOpenSecond==true && this.isOpenThird==false){
       return "bar-content OpenSecond";
     }
      else if(this.isOpenFirst==false && this.isOpenSecond==false && this.isOpenThird==true){
       return "bar-content OpenThird";
     }
     else
     {
       return "bar-content OpenFirst";
     }
  }

 /* onFTitleClick(){
    this.isOpenFirst=!this.isOpenFirst;
    this.isOpenSecond=false;
    this.isOpenThird=false;
  }
  onSTitleClick(){
    this.isOpenSecond=!this.isOpenSecond;
    this.isOpenFirst=false;
    this.isOpenThird=false;
  }
  onTTitleClick(){
    this.isOpenThird=!this.isOpenThird;
    this.isOpenFirst=false;
    this.isOpenSecond=false;
  }*/

  async onLoadDate(){
   const url='/assets/data/NavJason.json';
   const header={
     method:'get'
   };

   try{
     const res=await fetch(url, header);
     const data=await res.json();
     console.log(data);
     data.map((item,index)=>{
        console.log(item);
     });

     this.listNavData=data;
     console.log(this.listNavData);

   } catch(error){
     console.log(error);
   }
}

/*fetch(url).then((res)=>{
  console.log(res.json());
}).then((data)=>{
  this.listNavData=data;
  console.log(this.listNavData);
}).catch((err)=>{
  console.log(err);
}):*/


}
