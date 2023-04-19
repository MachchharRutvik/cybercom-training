import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor( private element:ElementRef) {
    element.nativeElement.focus();
   }

}
