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
    console.log(window.innerWidth);
    if(window.innerWidth>1000){
      this.renderer.setStyle(this.elRef.nativeElement,'font-size',"100%")
    }
    if(window.innerWidth<=1000 && window.innerWidth>700){
      this.renderer.setStyle(this.elRef.nativeElement,'font-size',"99%")
    }
  }
  @HostListener('window:resize',[])onresize(){ 
    console.log(window.innerWidth);
    if(window.innerWidth>1000){
      this.renderer.setStyle(this.elRef.nativeElement,'font-size',"100%")
    }
    if(window.innerWidth<=1000 && window.innerWidth>700){
      this.renderer.setStyle(this.elRef.nativeElement,'font-size',"99%")
    }
  }

}
