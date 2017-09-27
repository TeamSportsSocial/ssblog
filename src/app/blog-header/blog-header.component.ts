import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {SaveService} from "../services/save.service";
import {Http} from "@angular/http";
import {GetService} from "../services/get.service";



@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],

})
export class BlogHeaderComponent implements OnInit {
  data;
  keywords=[]
  pageNumber=1;
  Page:{
    name:string
    page:number
  }
  @ViewChild('Header') Header:ElementRef;
  @ViewChild('left') left :ElementRef;
  @ViewChild('text') text;
  mobileView:boolean=false;
  constructor(
    private sendHeight:PropertyService,
    private renderer : Renderer2,
    private send:PropertyService,
    private recieveSaved: SaveService,
    private sendSaved: SaveService,
    private elRef:ElementRef,
    private suggestedKeywords: GetService,
    private http:Http
  
  ) { }
  ngOnInit() {
    this.http.get(' https://test.sportsocial.in/user/getKeywords  ')
    .map(res=>res.json())
    .subscribe(
      res=>{
        for(let i in res){
          this.keywords.push(
            res[i].Keyword
          )
        }
      }
    )
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    if(window.innerWidth<=750){
      this.mobileView=true;
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','80% ')
    }
    else{
      this.mobileView=false;
      this.renderer.removeStyle(this.Header.nativeElement.firstElementChild,'width')
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','85%')
    }
    
  }
  ngAfterViewChecked(){
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
  }
  @HostListener('window:resize',[]) onresize(){
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    if(window.innerWidth<=750){
      this.mobileView=true;
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','80% ')
    }
    else{
      this.mobileView=false;
      this.renderer.removeStyle(this.Header.nativeElement.firstElementChild,'width')
      this.renderer.setStyle(this.Header.nativeElement.firstElementChild,'width','85%')
    }
  
  }
}
