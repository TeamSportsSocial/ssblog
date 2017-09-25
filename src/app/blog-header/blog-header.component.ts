import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {SaveService} from "../services/save.service";

@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  data;
  header:{imageUrl?:string,name?:string,pageUrl:string}[]=[
    {name:"App",pageUrl:"#"},
    {name:"Website",pageUrl:"#"},
    {name:"Editor",pageUrl:"editorPanel"},
  ]
  @ViewChild('Header') Header:ElementRef;
  @ViewChild('left') left :ElementRef;
  mobileView:boolean=false;
  constructor(
    private sendHeight:PropertyService,
    private renderer : Renderer2,
    private send:PropertyService,
    private recieveSaved: SaveService,
    private sendSaved: SaveService
  ) { }
  ngOnInit() {
  
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    //
    //console.log(this.Header.nativeElement.getBoundingClientRect().bottom)
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
