import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ctrlBGColor]'
})
export class CtrlBGColorDirective {
  constructor(ele: ElementRef) {
    let bgColor = '#' + (Math.random() * 0xffffff << 0).toString(16);
    console.log(ele);

    ele.nativeElement.style.backgroundColor = bgColor;
  }
}
