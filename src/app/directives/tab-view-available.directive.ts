import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  PLATFORM_ID,
  Inject,
  
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ɵgetDOM } from '@angular/platform-browser';
import { PropertyService } from '../services/property.service';

@Directive({
  selector: '[TabViewAvailable]'
})
export class TabViewAvailableDirective {
  windowWidth;
  className;
  isBrowser;
  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2, 
    private recieveWidth: PropertyService,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
   
    this.isBrowser = isPlatformBrowser(platformId);
    this.recieveWidth.ofWindow.subscribe(
      (data) => {
        this.windowWidth = data;
      }
    )
      if (this.windowWidth < 950 && this.windowWidth > 600) {
        this.className = this.elRef.nativeElement.className;

        if (this.className === 'col-8') {
          this.renderer.removeClass(this.elRef.nativeElement, this.className);
          this.renderer.addClass(this.elRef.nativeElement, 'col-12');
        }
        if (this.className === 'col-4') {
          this.renderer.removeClass(this.elRef.nativeElement, this.className);
          this.renderer.addClass(this.elRef.nativeElement, 'col-6');
        }
      }
  }
   ngAfterViewInit() {
    this.recieveWidth.ofWindow.subscribe(
      (data) => {
        this.windowWidth = data;
      }
    )
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
    this.recieveWidth.ofWindow.subscribe(
      (data) => {
        this.windowWidth = data;
      }
    )
        if (this.windowWidth < 950 && this.windowWidth > 600 ) {
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
    this.recieveWidth.ofWindow.subscribe(
      (data) => {
        this.windowWidth = data;
      }
    )
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
        }
        if (this.className === 'col-4') {
          this.renderer.removeClass(this.elRef.nativeElement, this.className);
          this.renderer.addClass(this.elRef.nativeElement, 'col-6');
        }
      }
    }
}
