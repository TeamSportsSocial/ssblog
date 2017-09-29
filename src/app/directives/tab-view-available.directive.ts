import { 
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[TabViewAvailable]'
})
export class TabViewAvailableDirective {
  windowWidth;
  className;
  constructor(private elRef:ElementRef,private renderer:Renderer2) { 
    this.windowWidth=window.innerWidth;
    if(this.windowWidth<950 &&this.windowWidth>600){
      this.className=this.elRef.nativeElement.className
     
      if(this.className=='col-8'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-12')
        this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if(this.className=='col-4'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-6')
      }
    }
  }
   ngAfterViewInit(){
    this.windowWidth=window.innerWidth;
    if(this.windowWidth<950 &&this.windowWidth>600){
      this.className=this.elRef.nativeElement.className
      console.log(this.className, " b")
      if(this.className=='col-8'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-12')
        this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if(this.className=='col-4'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-6')
      }
      console.log(this.className)
   }
  }
  ngAfterContentInit(){
    this.windowWidth=window.innerWidth;
    if(this.windowWidth<950 &&this.windowWidth>600){
      this.className=this.elRef.nativeElement.className
      //console.log(this.className, " r")
      if(this.className=='col-8'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-12')
        this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if(this.className=='col-4'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-6')
      }
     // console.log(this.className, " t")
   }
  }
  @HostListener('window:resize',[])onresize(){
    this.windowWidth=window.innerWidth;
    if(this.windowWidth>950){
      this.className=this.elRef.nativeElement.className
       console.log(this.className)
      if(this.className=='col-12'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-8')
       
      }
      if(this.className=='col-6'){
   
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-4')
      }
    }
    if(this.windowWidth<950 &&this.windowWidth>600){
      this.className=this.elRef.nativeElement.className
     
      if(this.className=='col-8'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-12')
        this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if(this.className=='col-4'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-6')
      }
    }
    console.log(this.className)
  }

}
