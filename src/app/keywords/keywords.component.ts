import {
   Component, 
   OnInit,
   ViewChild,
   HostListener,
   ElementRef,
   Renderer2,
   AfterViewInit,
   ViewChildren
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import { KeywordComponent } from './keyword/keyword.component';
import {Http} from "@angular/http";
import {GetService} from "../services/get.service";
import {Router} from "@angular/router";
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
  constructor(private renderer :Renderer2 ,
    private recieveHeight:PropertyService,
    private sendHeight:PropertyService,
    private searched:GetService,
    private http:Http,
    private sendSearchedData:PropertyService,
    private router:Router
  ) { }

  ngOnInit() {
    
   // console.log(this.keywords)
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position',"fixed");
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+"px");
  }
  ngAfterViewInit(){
    this.http.get(' https://test.sportsocial.in/user/getKeywords  ')
    .map(res=>res.json())
    .subscribe(
      res=>{
       // console.log(res)
        for(let i in res){
          //console.log(res[i])
          this.keywords.push(
            {
              name:res[i].Keyword
            }
          )
        }
      }
    )
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position',"fixed");
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+"px");
    this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
  }
  ngAfterViewChecked(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position',"fixed");
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+"px");
    this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
  }
  send(i:number){
    this.searched.blogData(this.pageNumber,this.keywords[i].name).subscribe(
      res=>{
        console.log(res)
        this.sendSearchedData.ofBlogCard.next(res);

      }
    )
    this.path="/"+this.keywords[i].name;
    this.router.navigate([this.path]);
  }
  @HostListener('window:resize',[]) onresize(){
    this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
    this.recieveHeight.ofHeader.subscribe(
      margin=> this.topMargin=margin
    )
    
    this.renderer.setStyle(this.Keywords.nativeElement,'position',"fixed");
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+"px");
  }
}
