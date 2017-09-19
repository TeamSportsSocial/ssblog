import { 
  Component, 
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import {PropertyService} from "../../services/property.service";


@Component({
  selector: 'SportSocial-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit,AfterViewInit {
  blogDetails:{
    img:string,
    bloggerName:string,
    bloggerImg:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
  }
  topMargin;
  removeTrendingBlock:boolean=false;
  mobileView=false;
  @ViewChild('blog') blog;
  @ViewChild('page')page;
  constructor(private reciveHeight:PropertyService,private renderer:Renderer2) { }
  ngOnInit(){
    if(window.innerWidth>950){
      this.removeTrendingBlock=false;
      this.mobileView=false;
    }
    if(window.innerWidth>600 && window.innerWidth<=950){
      this.removeTrendingBlock=true;
      this.mobileView=false;
    }
    if(window.innerWidth<=600 ){
      this.removeTrendingBlock=true;
      this.mobileView=true;
    }
  }
  ngAfterViewInit(){
    this.reciveHeight.ofKeyWords.subscribe(
      (margin)=>this.topMargin=margin
    ) 
    this.renderer.setStyle(this.blog.nativeElement,'margin-top',this.topMargin+"px")
  }
  @HostListener('window:resize',[]) onresize(){
    this.reciveHeight.ofKeyWords.subscribe(
      (margin)=>this.topMargin=margin
    )
    this.renderer.setStyle(this.blog.nativeElement,'margin-top',this.topMargin+"px");
    if(window.innerWidth>950){
      this.removeTrendingBlock=false;
      this.mobileView=false;
    }
    if(window.innerWidth>600 && window.innerWidth<=950){
      this.removeTrendingBlock=true;
      this.mobileView=false;
    }
    if(window.innerWidth<=600 ){
      this.removeTrendingBlock=true;
      this.mobileView=true;
    }
  }

}
