import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {

  header:{imageUrl?:string,name?:string,pageUrl:string}[]=[
    {name:"App",pageUrl:"#"},
    {name:"Website",pageUrl:"#"},
    {name:"Editor",pageUrl:"editorPanel"},
  ]
  @ViewChild('Header') Header:ElementRef;
  mobileView:boolean=false;
  constructor(private sendHeight:PropertyService,private renderer : Renderer2) { }

  ngOnInit() {
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().height);
    if(window.innerWidth<=600){
      this.mobileView=true;
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','80%')
    }
    else{
      this.mobileView=false;
      this.renderer.removeStyle(this.Header.nativeElement.firstElementChild,'width')
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','49%')
    }
  }
  @HostListener('window:resize',[]) onresize(){
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().height);
    if(window.innerWidth<=600){
      this.mobileView=true;
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','80%')
    }
    else{
      this.mobileView=false;
      this.renderer.removeStyle(this.Header.nativeElement.firstElementChild,'width')
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','49%')
    }
  }
}
