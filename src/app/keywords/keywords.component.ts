import {
   Component, 
   OnInit,
   ViewChild,
   HostListener,
   ElementRef,
   Renderer2,
   AfterViewInit,
   ViewChildren,
   PLATFORM_ID,
   Inject
} from '@angular/core';
import {PropertyService} from '../services/property.service';
import {KeywordComponent} from './keyword/keyword.component';
import {PostService} from '../services/post.service';
import {GetService} from '../services/get.service';
import {Router} from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ɵgetDOM } from '@angular/platform-browser';

@Component({
  selector: 'SportSocialBlog-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit,AfterViewInit {
  
  postKeyWords:{
    name:string;
  }

  keywords:{name:string}[]=[]

 @ViewChild('Keywords') Keywords:ElementRef;
  topMargin;
  keyWordContainerwidth;
  sumofkeyWordWidth;
  pageNumber=1;
  path:string;
  isBrowser: boolean = false;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private renderer :Renderer2 ,
    private recieveHeight:PropertyService,
    private sendHeight:PropertyService,
    private searched:PostService,
    private sendSearchedData:PropertyService,
    private router:Router,
    private sendKey:PropertyService,
    private get: GetService

  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.get.keywords().subscribe(
      res=>{
          for(let i in res){
            this.keywords.push(
            {
             name:res[i].keywordName
            }
          )
        }
      }
    )
    // console.log(this.keywords, ' check')
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position','fixed');
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+'px');
  }
  ngAfterViewInit(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position','fixed');
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+'px');
    this.sendHeight.ofKeyWords.next( ɵgetDOM().getBoundingClientRect(this.Keywords.nativeElement).bottom);
  }
  ngAfterViewChecked(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement, 'position','fixed');
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+'px');

      this.sendHeight.ofKeyWords.next(ɵgetDOM().getBoundingClientRect(this.Keywords.nativeElement).bottom);
    
  }
  send(i:number){
    /* this.searched.blogData(this.pageNumber,this.keywords[i].name).subscribe(
      res=>{
        console.log(res)
        this.sendSearchedData.ofsearchBlog.next(res);
      }
    ) */
    this.path='/'+this.keywords[i].name;
    this.router.navigate([this.path]);
    //this.sendKey.ofBlogCard.next(this.keywords[i].name)
  }
  @HostListener('window:resize',[]) onresize(){
    this.sendHeight.ofKeyWords.next(ɵgetDOM().getBoundingClientRect(this.Keywords.nativeElement).bottom);
    this.recieveHeight.ofHeader.subscribe(
      margin => this.topMargin=margin
    )
    
    this.renderer.setStyle(this.Keywords.nativeElement,'position','fixed');
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+'px');
  }
}
