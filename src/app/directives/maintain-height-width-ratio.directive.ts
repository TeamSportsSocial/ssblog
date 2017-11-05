import { 
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  AfterViewInit,
  PLATFORM_ID,
  Inject
 } from '@angular/core';
 import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[MaintainHeightWidthRatio]'
})
export class MaintainHeightWidthRatioDirective {
  height;
  width;
  isBrowser: boolean;
  constructor(private elRef:ElementRef,private renderer:Renderer2, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setHeight()
  }
   ngAfterViewInit(){
    this.setHeight()
  }
  @HostListener('window:resize',[])onresize(){
    this.setHeight()
  }
  setHeight(){
    if(this.isBrowser){
      this.width=this.elRef.nativeElement.getBoundingClientRect().width; 
      if(this.elRef.nativeElement.parentNode.parentNode.className=='col-8'){
        this.height=0.47*(this.width)
      }
      if(this.elRef.nativeElement.parentNode.parentNode.className==='col-4'){
        this.height=(1)*this.width
      }
      if(this.elRef.nativeElement.parentNode.parentNode.className=='col-6'){
        this.height=(1)*this.width
      }
      if(this.elRef.nativeElement.parentNode.parentNode.className=='col-12'){
        this.height=0.47*(this.width)
      }
      if(this.elRef.nativeElement.parentNode.parentNode.className=='trendingBlogs'){
        this.height = (1.9) * this.width
      }
      if(this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className != "latestBlog col-4" ){
        this.height = (0.3) * this.width
      }
      if(this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'latestBlog col-4'){
        this.height = (0.64) * (this.width)
      }
      if(this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth < 950){
        this.renderer.setStyle(this.elRef.nativeElement,'width','100%')
        this.width = this.elRef.nativeElement.getBoundingClientRect().width
        this.height = -(.548751486325*(this.width)) + this.width
      }
      if(this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth >= 950){
        this.renderer.setStyle(this.elRef.nativeElement,'height',"23.5%")
      }
      this.renderer.setStyle(this.elRef.nativeElement,'height',this.height + "px")
    }
  }

}
