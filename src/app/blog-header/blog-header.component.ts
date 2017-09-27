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
import {Http} from "@angular/http";
import {GetService} from "../services/get.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";



@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  
  arrayOfStrings = ['this', 'is', 'list', 'of', 'string', 'element'];
  
    valueChanged(newVal) {
      console.log("Case 2: value is changed to ", newVal);
    }
  data;
  header:{imageUrl?:string,name?:string,pageUrl:string}[]=[
    {name:"App",pageUrl:"#"},
    {name:"Website",pageUrl:"#"},
    {name:"Editor",pageUrl:"editorPanel"},
  ]
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
    private _sanitizer: DomSanitizer,
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
    console.log(this.keywords)
    //this.renderer.setStyle(this.suggestion.nativeElement,'margin-top',this.Header.nativeElement.getBoundingClientRect().bottom +"px")
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
  autocompleListFormatter = (data: any) => {
    let html = `<span style='color:red;margin:5px;backgroundColor:yellow'>${data} </span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  getSuggestions(){
    
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
