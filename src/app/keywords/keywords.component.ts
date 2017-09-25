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
@Component({
  selector: 'SportSocialBlog-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit,AfterViewInit {
  
  postKeyWords:{
    name:string;
  }

  keywords:{name:string,backgroundImg:string}[]=[
    {name:'Sports is a new social', backgroundImg:'url("/assets/images/ariel-lustre-242326.jpg")'},
    {name:'Boxing', backgroundImg:'url("/assets/images/robert-collins-333411.jpg")'},
    {name:'Running',backgroundImg:"url('/assets/images/clem-onojeghuo-71989.jpg')"},
    {name:'Social',backgroundImg:"url('/assets/images/robert-collins-341231.jpg')"}, 
    {name:'Passion',backgroundImg:"url('/assets/images/2.jpg')"},
    {name:'Help Center',backgroundImg:"url('/assets/images/alec-moore-5093.jpg')"},
    {name:'Local Sports',backgroundImg:"url('/assets/images/robert-collins-341231.jpg')"},
    {name:'College',backgroundImg:"url('/assets/images/goh-rhy-yan-273921 (1).jpg')"},
    {name:'Cricket',backgroundImg:"url('/assets/images/robert-collins-341231.jpg')"},
    {name:'Football',backgroundImg:"url('/assets/images/hermes-rivera-265368.jpg')"},
    {name:'BasketBall',backgroundImg:"url('/assets/images/tom-sodoge-54031.jpg')"},
    {name:'Badminton',backgroundImg:"url('/assets/images/robert-collins-341231.jpg')"},
    {name:'Hockey',backgroundImg:"url('/assets/images/robert-collins-341231.jpg')"},
    {name:'Champion',backgroundImg:"url('/assets/images/sayan-nath-180616.jpg')"}
  ]

 @ViewChild('Keywords') Keywords:ElementRef;
  topMargin;
  keyWordContainerwidth;
  sumofkeyWordWidth;
  constructor(private renderer :Renderer2 ,
    private recieveHeight:PropertyService,
    private sendHeight:PropertyService,
    private http:Http
  ) { }

  ngOnInit() {
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.Keywords.nativeElement,'position',"fixed");
    this.renderer.setStyle(this.Keywords.nativeElement,'top',this.topMargin+"px");
  }
  ngAfterViewInit(){
    
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
    this.postKeyWords={
      name:this.keywords[i].name
    }
    console.log(this.postKeyWords);
    this.http.post('https://test.sportsocial.in/poc/loadblogdata',this.postKeyWords).subscribe(
      (data)=>console.log(data)
    )
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
