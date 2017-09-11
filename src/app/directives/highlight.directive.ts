import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor= '#D84C2B';
   }

}
