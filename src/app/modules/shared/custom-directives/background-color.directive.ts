import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  //selector == css selector
  selector: '[darkBackgroundColor]'
})
export class BackgroundColorDirective implements AfterViewInit {

  @Input() bgColor : string =  "rgba(19, 18, 18, 0.26)";

  constructor(private element:ElementRef) { }

  ngAfterViewInit(){
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }

}
