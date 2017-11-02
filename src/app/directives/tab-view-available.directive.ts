import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';


@Directive({
  selector: '[TabViewAvailable]'
})
export class TabViewAvailableDirective {
  windowWidth;
  className;
  constructor(private elRef: ElementRef, private renderer: Renderer2, private winRef: WindowRefService) {
    this.windowWidth = winRef.nativeWindow.innerWidth;
    if (this.windowWidth < 950 && this.windowWidth > 600) {
      this.className = this.elRef.nativeElement.className;
     
      if (this.className === 'col-8') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-12');
      }
      if (this.className === 'col-4') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className)
        this.renderer.addClass(this.elRef.nativeElement, 'col-6')
      }
    }
  }
   ngAfterViewInit() {
    this.windowWidth = this.winRef.nativeWindow.innerWidth;
    if (this.windowWidth < 950 && this.windowWidth > 600) {
      this.className = this.elRef.nativeElement.className;
      if (this.className === 'col-8') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-12');
        // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if (this.className === 'col-4') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-6');
      }
     
   }
  }
  ngAfterContentInit() {
    this.windowWidth = this.winRef.nativeWindow.innerWidth;
    if (this.windowWidth < 950 && this.windowWidth > 600 ){
      this.className = this.elRef.nativeElement.className;
      if (this.className === 'col-8') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-12');
        // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if (this.className === 'col-4') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-6');
      }
   }
  }
  @HostListener('window:resize', [])onresize() {
    this.windowWidth = this.winRef.nativeWindow.innerWidth;
    if (this.windowWidth > 950) {
      this.className = this.elRef.nativeElement.className;
      if (this.className === 'col-12') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-8');
      }
      if (this.className === 'col-6') {
        this.renderer.removeClass(this.elRef.nativeElement, this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-4');
      }
    }
    if (this.windowWidth < 950 && this.windowWidth > 600) {
      this.className = this.elRef.nativeElement.className;
      if (this.className === 'col-8') {
        this.renderer.removeClass(this.elRef.nativeElement,  this.className);
        this.renderer.addClass(this.elRef.nativeElement, 'col-12');
       // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
      }
      if(this.className=='col-4'){
        this.renderer.removeClass(this.elRef.nativeElement,this.className)
        this.renderer.addClass(this.elRef.nativeElement,'col-6')
      }
    }
  }

}
