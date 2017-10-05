import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {GetService} from "../services/get.service";
import {Http} from "@angular/http";
import {PostService} from "../services/post.service";
import { Observable } from 'rxjs/Rx';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Router} from '@angular/router'


@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],
})
export class BlogHeaderComponent implements OnInit {
  data;
  keywords=[]
  pageNumber=1;
  selected;
  customText;
  Page:{
    name:string
    page:number
  }
  
  @ViewChild('Header') Header:ElementRef;
  @ViewChild('left') left :ElementRef;
  @ViewChild('searchBox') searchBox:ElementRef;
  @ViewChild('linkImage') linkImage:ElementRef;
  mobileView:boolean=false;
  searchedTextPresent:boolean=false;
  open:boolean=false;
  constructor(
    private sendHeight:PropertyService,
    private renderer : Renderer2,
    private send:PropertyService,
    private get :GetService,
    private elRef:ElementRef,
    private http:Http,
    private _sanitizer: DomSanitizer,
    private searchKeyword: PostService,
    private router:Router,
    private sendKey:PropertyService,
    private cd:ChangeDetectorRef
  ) { }
  ngOnInit() {
    
    this.get.keywords()
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
    }
    else{
      this.mobileView=false;
    }
    
    
  }
  ngAfterViewChecked(){
    
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
  }
  
  @HostListener('window:resize',[]) onresize(){
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    if(window.innerWidth<=750){
      this.mobileView=true;
    }
    else{
      this.mobileView=false;
    }
  
  }
  openDropDown(){
    this.open=true;
  }
  closeDropDown(){
    this.open=false;
  }
  valueChanged(newVal) {
    this.searchedTextPresent=true;
    console.log("Case 2: value is changed to ", newVal );
    this.searchKeyword.blogData(1,newVal).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.open=false;
    this.router.navigate(['/'+newVal])
    this.sendKey.ofBlogCard.next(newVal)
    this.searchBox.nativeElement.value=""
  }
 
  sendData(key){
    let input=this.searchBox.nativeElement.value
    if(key.code=="Enter"){
      console.log(input)
      this.open=false;
      this.router.navigate(['/'+input])
      this.sendKey.ofBlogCard.next(input)
      this.searchBox.nativeElement.value=""
    }
  }
  autocompleListFormatter = (data: any) => {
    let html = `<span style='font-size:1.2em'>${data} </span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  hover(event){
    this.linkImage.nativeElement.src="/assets/images/sports-social-link-orange-symbol.png"
  }
  removehoverColor(event){
    this.linkImage.nativeElement.src="/assets/images/sports-social-link-blue-symbol.png"
  }
}
