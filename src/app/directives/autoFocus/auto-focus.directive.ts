import { Directive, AfterViewInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[AutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLInputElement>) { }
 
  ngAfterViewInit(): void {
    this.element.nativeElement.focus;
  }
}
