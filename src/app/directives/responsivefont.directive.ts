import { 
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[Responsivefont]'
})
export class ResponsivefontDirective  {
  width;
  fontSize;
  constructor(private elRef:ElementRef,private renderer:Renderer2) {
    this.width=this.elRef.nativeElement.getBoundingClientRect().width
    console.log(this.elRef.nativeElement.className)  
    
  }
  @HostListener('window:resize',[])onresize(){ 
  }

}
