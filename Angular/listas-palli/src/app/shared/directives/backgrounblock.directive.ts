import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgrounblock]'
})
export class BackgrounblockDirective {

  constructor(rendered: Renderer2, elementRef: ElementRef) {
    rendered.setStyle(elementRef.nativeElement, 'background-color', 'red');
   }

}
