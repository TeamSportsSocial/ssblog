import { 
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  AfterViewInit
 } from '@angular/core';

@Directive({
  selector: '[MaintainHeightWidthRatio]'
})
export class MaintainHeightWidthRatioDirective implements AfterViewInit {
  height;
  width;
  constructor(private elRef:ElementRef,private renderer:Renderer2) {
    this.width=this.elRef.nativeElement.getBoundingClientRect().width;
   // console.log(this.elRef.nativeElement.parentNode.className)
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-8'){
      this.height=-(.536231884057*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.height=-(.063889538965*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-6'){
      this.height=-(.048751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-12'){
      this.height=-(.531555929660*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='trendingBlogs'){
      this.height=(.9193700617283*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='latest'  && this.elRef.nativeElement.parentNode.parentNode.className=='col-12 latestBlog'){
      this.height=-(.631555929660*(this.width))+this.width
      console.log("hello", this.elRef)
    }
    /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
     } */
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth<950){
      this.renderer.setStyle(this.elRef.nativeElement,'width','100%')
      this.width=this.elRef.nativeElement.getBoundingClientRect().width
      this.height=-(.548751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth>=950){
      this.renderer.setStyle(this.elRef.nativeElement,'height',"23.5%")
    }
    this.renderer.setStyle(this.elRef.nativeElement,'height',this.height+"px")
  }
  ngAfterViewInit(){
    this.width=this.elRef.nativeElement.getBoundingClientRect().width;
    
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-8' ){
      this.height=-(.536231884057*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.height=-(.063889538965*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-6'){
      this.height=-(.048751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-12'){
      this.height=-(.531555929660*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='trendingBlogs'){
      this.height=(.9193700617283*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='latest'  && this.elRef.nativeElement.parentNode.parentNode.className=='col-12 latestBlog'){
      this.height=-(.631555929660*(this.width))+this.width
    }
    /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
    } */
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth<950){
      this.renderer.setStyle(this.elRef.nativeElement,'width','100%')
      this.width=this.elRef.nativeElement.getBoundingClientRect().width
      this.height=-(.548751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth>=950){
      this.renderer.setStyle(this.elRef.nativeElement,'height',"23.5%")
    }
    this.renderer.setStyle(this.elRef.nativeElement,'height',this.height+"px")
  }
  ngAfterViewChecked(){
    this.width=this.elRef.nativeElement.getBoundingClientRect().width;
    
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-8'){
      this.height=-(.536231884057*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.height=-(.063889538965*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-6'){
      this.height=-(.048751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-12'){
      this.height=-(.531555929660*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='trendingBlogs'){
      this.height=(.9193700617283*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='latest'   && this.elRef.nativeElement.parentNode.parentNode.className=='col-12 latestBlog'){
      this.height=-(.631555929660*(this.width))+this.width
    }
    /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
     } */
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth<950){
      this.renderer.setStyle(this.elRef.nativeElement,'width','100%')
      this.width=this.elRef.nativeElement.getBoundingClientRect().width
      this.height=-(.548751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth>=950){
      this.renderer.setStyle(this.elRef.nativeElement,'height',"23.5%")
    }
    this.renderer.setStyle(this.elRef.nativeElement,'height',this.height+"px")
  }
  @HostListener('window:resize',[])onresize(){
    this.width=this.elRef.nativeElement.getBoundingClientRect().width; 
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-8'){
       this.height=-(.536231884057*(this.width))+this.width
     }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
       this.height=-(.063889538965*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-6'){
       this.height=-(.048751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='col-12'){
       this.height=-(.531555929660*(this.width))+this.width
    }
    if(this.elRef.nativeElement.parentNode.parentNode.className=='trendingBlogs'){
      this.height=(.9552700617283*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='latest'  && this.elRef.nativeElement.parentNode.parentNode.className=='col-12 latestBlog'){
      this.height=-(.631555929660*(this.width))+this.width
    }
    /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
      this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
     } */
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth<950){
      this.renderer.setStyle(this.elRef.nativeElement,'width','100%')
      this.width=this.elRef.nativeElement.getBoundingClientRect().width
      this.height=-(.548751486325*(this.width))+this.width
    }
    if(this.elRef.nativeElement.className=='subscribeCard' && window.innerWidth>=950){
      this.renderer.setStyle(this.elRef.nativeElement,'height',"23.5%")
    }
    this.renderer.setStyle(this.elRef.nativeElement,'height',this.height+"px")

  }

}
