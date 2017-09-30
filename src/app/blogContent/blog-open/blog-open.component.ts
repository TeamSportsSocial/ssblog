import { 
    Component, 
    OnInit,
    ViewChild,
    Renderer2,
    HostListener
 } from '@angular/core';
import {Http} from "@angular/http";
import {PropertyService} from "../../services/property.service";
import {SaveService} from "../../services/save.service";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import { 
    FacebookService, 
    LoginResponse, 
    LoginOptions, 
    UIResponse, 
    UIParams, 
    FBVideoComponent 
} from 'ngx-facebook';
import {Router} from '@angular/router'

@Component({
  selector: 'SportSocial-blog-open',
  templateUrl: './blog-open.component.html',
  styleUrls: ['./blog-open.component.css']
})
export class BlogOpenComponent implements OnInit {
  
    blog;
    topMargin;
    removeSocial:boolean=false;
    isConnectedWithFacebook:boolean=false;
    mobileView:boolean=false;
    relatedBlogDetails:{
        blogId:string;
        blogImage:string;
        bloggerName:string,
        bloggerImage:string,
        heading:string,
        Content:string,
        insertedDate:string,
        viewCount:string,
        shareCount:string,
        keywords:string[],
        exactDate:string;
        readingTime:string;
      }[]=[]
    @ViewChild('openBlog') openBlog;
    @ViewChild('Social') Social;
    @ViewChild('BlogInfo') BlogInfo;
    @ViewChild('popup') popup;
    constructor(
        private recieve:PropertyService ,
        private recieveHeight:PropertyService,
        private renderer :Renderer2,
        private route :ActivatedRoute,
        private fb: FacebookService,
        private http:Http,
        private getRelated: PostService,
        private sendKey:PropertyService,
        private router:Router
    ) { 
        fb.init({
            appId: '140286013252973',
            version: 'v2.10'
          });
    }

    ngOnInit() {
        console.log(this.popup)
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
            this.topMargin=margin
            }
        )
        
        this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
        !function(d,s,id){
            var js: any,
                fjs=d.getElementsByTagName(s)[0],
                p='https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,"script","twitter-wjs");
        this.recieve.detailsofBlog.subscribe(
            (data)=>{
                this.blog=data;
            }
        )
        if(this.blog!=null){
            sessionStorage.setItem('Blog',JSON.stringify(this.blog))
        }
        if(this.blog==null){
            this.blog=JSON.parse(sessionStorage.getItem('Blog'))
        }
        if(window.innerWidth>950){
            this.mobileView=false;
            this.removeSocial=false;
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','68%')
        }
        if(window.innerWidth<=950 && window.innerWidth>700){
           this.removeSocial=true; 
           this.mobileView=false;
           this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%');
           
        }
        if(window.innerWidth<700){
            this.removeSocial=true;
            this.mobileView=true;
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%')
        }
        this.getRelated.blogData(1,this.blog.keywords[this.blog.keywords.length-1]).subscribe(
            data=>{
                console.log(data, " related")
                for(let i=2;i<5;i++){
                    this.relatedBlogDetails.push(
                      {
                        blogId:data[i].blogId,
                        blogImage:data[i].blogImage,
                        bloggerName:data[i].bloggerName,
                        bloggerImage:data[i].bloggerImage,
                        heading:data[i].heading,
                        Content:data[i].Content,
                        insertedDate:this.timePassed(data[i].insertedDate),
                        viewCount:"50",
                        shareCount:"50",
                        keywords:data[i].keywords.split(","),
                        exactDate:this.ExactDate(data[i].insertedDate),
                        readingTime:this.timeToRead(data[i].Content)
                      }
                    )
                }
            }
        )

    }
    timeToRead(s:string){
        let words = s.split(" ");
        return Math.round(words.length/180) + " min read"
    }
    ngAfterViewInit () {
        !function(d,s,id){
            var js: any,
                fjs=d.getElementsByTagName(s)[0],
                p='https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,"script","twitter-wjs");
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
            this.topMargin=margin
           
            }
        )
        this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
        
    }
    ngAfterViewChecked(){
        !function(d,s,id){
            var js: any,
                fjs=d.getElementsByTagName(s)[0],
                p='https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,"script","twitter-wjs");
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
            this.topMargin=margin
            }
        )
      this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
    }
    @HostListener('window:resize',[]) onresize(){
        !function(d,s,id){
            var js: any,
                fjs=d.getElementsByTagName(s)[0],
                p='https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,"script","twitter-wjs");
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
              this.topMargin=margin
            }
        )
        this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
        if(window.innerWidth>950){
            this.mobileView=false;
            this.removeSocial=false;
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','68%')
        }
        if(window.innerWidth<=950 && window.innerWidth>700){
           this.removeSocial=true; 
           this.mobileView=false;
           this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%');
           
        }
        if(window.innerWidth<700){
            this.removeSocial=true;
            this.mobileView=true;
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%')
        }
        
    }
    timePassed(i:string){
        let writtenDate=new Date(i);
        let presentDate=new Date();
        if(writtenDate.getFullYear()==presentDate.getFullYear()){
          if(writtenDate.getMonth()==presentDate.getMonth()){
            if(writtenDate.getDate()==presentDate.getDate()){
                return "Today"
            }
            else{
              return presentDate.getDate()-writtenDate.getDate() + " day ago"
            }
          }
          else{
            return presentDate.getMonth()-writtenDate.getMonth() + " month ago"
          }
        }
        else{
          return presentDate.getFullYear()-writtenDate.getFullYear() + " year ago"
        }
       
    }
    ExactDate(i:number){
      let writtenDate=new Date(i);
      return writtenDate.toDateString()
    }
    private handleError(error) {
        console.error('Error processing action', error);
    }
    loginOnFacebook() {
        this.fb.login()
          .then((res: LoginResponse) => {
            console.log('Logged in', res);
          })
          .catch(this.handleError);
    }
    getLoginStatusofFacebook() {
        this.fb.getLoginStatus()
          .then((res)=>{
            console.log(res)
            if(res.status=="connected"){
                this.isConnectedWithFacebook=true;
            }
            else{
                this.loginOnFacebook();
                this.isConnectedWithFacebook=true;
            }
          })
          .catch(console.error.bind(console));
    }
    shareOnFacebook(){
        const options: UIParams = {
            method: 'share',
            href: 'http://localhost:4200/Madrid%20smash%20through%20Juve%20to%20lift%2012th%20Champions%20League%20title'
          };
          this.getLoginStatusofFacebook();
          console.log(this.isConnectedWithFacebook)
       
          this.fb.ui(options)
            .then((res: UIResponse) => {
              console.log('Got the users profile', res);
            })
            .catch(this.handleError);
    }
    shareOnTwitter(){
        var width  = 575,
        height = 400,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = this.popup.nativeElement.attributes[2].value,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
    }
    getblogs(event){
        let key=event.toElement.innerText
        console.log(event.toElement.innerText,"   clicked")
        this.router.navigate(['/'+key])
        this.sendKey.ofBlogCard.next(key)
        
    }
    
}
