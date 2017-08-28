import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ctrlHide]'
})
export class CtrlHideDirective {

  constructor(ele: ElementRef) { }

  @HostListener('document:click', this.ele) eleClicked(ele) {
    console.log('document:click', ele);

    // ele.nativeElement.style.display = 'hidden';
  }
}
