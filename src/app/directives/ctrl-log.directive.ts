import { Directive, ElementRef, HostListener } from '@angular/core';
// https://developer.mozilla.org/en-US/docs/Web/Events

@Directive({
  selector: '[ctrlLog]'
})
export class CtrlLogDirective {
  constructor(ele: ElementRef) {
    console.log(ele);
  }

  @HostListener('click') doSomething(){
    console.log('event', event);
  }

  @HostListener('copy') doSomethingCopy(){
    console.log('event', event);
  }

  @HostListener('cut') doSomethingCut(){
    console.log('cut event', event);
  }
}
