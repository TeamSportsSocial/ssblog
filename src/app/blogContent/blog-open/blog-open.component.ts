import { 
    Component, 
    OnInit,
    ViewChild,
    Renderer2,
    HostListener,
    NgZone
} from '@angular/core';
import {Http} from "@angular/http";
import { Meta,Title } from '@angular/platform-browser';
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
    temp;
    blog:{
        blogId:string;
        blogImage:string;
        bloggerName:string,
        bloggerImage:string,
        heading:string,
        Content:string,
        insertedDate:string,
        ViewCount:string,
        ShareCount:string,
        keywords:string[],
        exactDate:string;
        readingTime:string;
    };
    topMargin;
    removeSocial:boolean=false;
    isConnectedWithFacebook:boolean=false;
    mobileView:boolean=false;
    dataRecived:boolean=false;
    openFullImage:boolean=false;
    relatedArticles:boolean=false;
    blogDataRecieved:boolean=false;
    blogID;
    Keywords=[]
    ViewCount:number;
    ShareCount:number;
    loading:boolean=true;
   
    @ViewChild('openBlog') openBlog;
    @ViewChild('Social') Social;
    @ViewChild('BlogInfo') BlogInfo;
    @ViewChild('popup') popup;
    @ViewChild('fullImage') fullImage;
    constructor(
        private recieve:PropertyService ,
        private recieveHeight:PropertyService,
        private renderer :Renderer2,
        private route :ActivatedRoute,
        private fb: FacebookService,
        private sendKey:PropertyService,
        private router:Router,
        private post:PostService,
        private send:PostService,
        private metaService: Meta,
        private load:PostService,
        private zone :NgZone,
        private titleService:Title
    ) { 
        this.blogID=this.route.snapshot.url[2].path
        this.scriptOfTwitter()
        fb.init({
            appId: '1750709328507665',
            version: 'v2.10'
          });
    }

    ngOnInit() {
        this.scriptOfTwitter()
        
        this.loadBlogFromSendData()

        if(this.blog==undefined){
            this.loadBlogFromUrl()
        }
       
        this.setTopMargin()
        this.setMobileView()
        
    }
    
    sendViewCount(){
        this.send.viewCountOfBlog(this.blogID,this.ViewCount).subscribe(
            data=>{
              //console.log(data, " view")
              
            }
        )
    }
    setTitle(){
        this.titleService.setTitle(this.blog.heading)
    }
    setMetaTags(){
        this.metaService.updateTag({
            content:"article"
            },
        'property="og:type"')
        this.metaService.updateTag({
            href:"https://www.chaseyoursport.com/"+this.route.snapshot.url[0].path+"/"+this.route.snapshot.url[1].path+"/"+this.route.snapshot.url[2].path+"/"
            },
        'rel="canonical"')
        this.metaService.updateTag({
            content:this.blog.heading.substr(0,139)
            },
        'name="title"')
        this.metaService.updateTag({
           content:this.blog.heading.substr(0,139)
            },
        'property="og:title"')
        this.metaService.updateTag({
            content:this.blog.Content.substring(0,139)
            },
        'name="description"')
        this.metaService.updateTag({
            content:this.blog.Content.substring(0,139)
            },
        'property="og:description"')
        this.metaService.updateTag({
            content:this.blog.blogImage
            },
        'property="og:image"')
        this.metaService.updateTag({
            content:"https://www.chaseyoursport.com/"+this.route.snapshot.url[0].path+"/"+this.route.snapshot.url[1].path+"/"+this.route.snapshot.url[2].path
            },
        'property="og:url"')
        this.metaService.updateTag({
            content:this.blog.heading.substring(0,139)
            },
        'name="twitter:title"')
        this.metaService.updateTag({
            content:this.blog.Content.substring(0,139)
            },
        'name="twitter:description"')
        this.metaService.updateTag({
            content:this.blog.blogImage
            },
        'name="twitter:image:src"')
    }
    
    loadBlogFromSendData(){
        this.recieve.detailsofBlog.subscribe(
            data=>{
                this.blogDataRecieved=true;
                this.blog={
                    blogId:data['blogId'],
                    blogImage:data['blogImage'],
                    bloggerName:data['bloggerName'],
                    bloggerImage:data['bloggerImage'],
                    heading:data['heading'],
                    Content:data['Content'],
                    insertedDate:data['insertedDate'],
                    ViewCount:data['ViewCount'],
                    ShareCount:data['ShareCount'],
                    keywords:data['keywords'],
                    exactDate:data['exactDate'],
                    readingTime:data['readingTime']
                }
                this.ShareCount=+this.blog.ShareCount
                this.ViewCount=+(this.blog.ViewCount)
                this.sendViewCount()
                this.Keywords=this.blog.keywords;
                this.sendKey.ofBlogCard.next(this.Keywords[this.Keywords.length-1])
                // this.getRelatedBlogs()
                this.setMetaTags();
                this.setTitle()
            }
        )
    }


    loadBlogFromUrl(){
        this.load.dataOfsingleBlog(this.blogID).subscribe(
            res=>{
                const data=res[0]
                console.log(data," t")
                this.blogDataRecieved=true;
               // console.log(this.blogDataRecieved,"  true")
                this.blog={
                    blogId:data.blogId,
                    blogImage:data.blogImage,
                    bloggerName:data.bloggerName,
                    bloggerImage:data.bloggerImage,
                    heading:data.heading,
                    Content:data.Content,
                    insertedDate:this.timePassed(data.insertedDate),
                    ViewCount:data.ViewCount,
                    ShareCount:data.ShareCount,
                    keywords:data.keys.split(","),
                    exactDate:this.ExactDate(data.insertedDate),
                    readingTime:this.timeToRead(data.Content)
                }
               
                this.ShareCount=+this.blog.ShareCount
                this.ViewCount=+(this.blog.ViewCount)
               
                this.sendViewCount()
                this.Keywords=this.blog.keywords;
                
                window.scrollTo(0,0)
                this.sendKey.ofBlogCard.next(this.Keywords[this.Keywords.length-1])
                this.setMetaTags();
                this.setTitle()
              
            }
        )
       
        
    }
    
    timeToRead(s:string){
        let words = s.split(" ");
        //console.log(s,words,words.length,this.blogID,"nadeem")
        let time=Math.round(words.length/180)
        if(time>0){
          return time + " min read"
        }
        else{
          return "1 min read"
        }
    }
    
    timePassed(i:string){
        let writtenDate=new Date(parseInt(i)*1000);
        let presentDate=new Date();
       // console.log(writtenDate.getDate(),presentDate.getDate(), " Date")
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
      let writtenDate=new Date(i*1000);
      //console.log(writtenDate," wDate")
      return writtenDate.toDateString()
    }
    
    
    
    setDefault(event){
        this.blog.bloggerImage="/assets/images/user.png"
    }

    removeInitalImage(){
        this.loading=false
    }
    setDefaultBlogImage(){
        this.blog.blogImage="/assets/images/default-image.png"
    }
    setMobileView(){
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
    
    scriptOfTwitter(){
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
    }

    setTopMargin(){
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
              this.topMargin=margin
            }
        )
        this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
    }
    
    @HostListener('window:resize',[]) onresize(){
        this.scriptOfTwitter();
        this.setMobileView()
        this.setTopMargin() 
        if( this.openFullImage==true){
            this.onFullImageload()
        }
    }
    
    
    private handleError(error) {
        console.error('Error processing action', error);
    }
    
    
    openfullImage(){
        this.openFullImage=true;   
    }
    onFullImageload(){
        let height= this.fullImage.nativeElement.getBoundingClientRect().height
       // console.log(height,window.innerHeight, "loaded")
        let top=(window.innerHeight-height)/2;
        this.renderer.setStyle(this.fullImage.nativeElement,"top",top+"px")
    }
    closeFullImage(){
        this.openFullImage=false;
    }
    
    
    loginOnFacebook() {
        this.fb.login()
          .then((res: LoginResponse) => {
            //console.log('Logged in', res);
          })
          .catch(this.handleError);
    }
    
    
    getLoginStatusofFacebook() {
        this.fb.getLoginStatus()
          .then((res)=>{
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
    
    sendShareCount(){
        this.post.shareCountOfBlog(this.blog.blogId,this.ShareCount).subscribe(
            data=>{
                //console.log(data, "sharedOnFacebook")
            }
        )
    }
    shareOnFacebook(){
        this.sendShareCount()
        const options: UIParams = {
            method: 'share',
            href: 'https://www.chaseyoursport.com/'+this.route.snapshot.url[0].path+'/'+this.route.snapshot.url[1].path+'/'+this.route.snapshot.url[2].path
          };
       
          //console.log(this.isConnectedWithFacebook)
       
          this.fb.ui(options)
            .then((res: UIResponse) => {
              //console.log('Got the users profile', res);
            })
            .catch(this.handleError);
    }
    
    
    shareOnTwitter(){
        this.sendShareCount()
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
        this.router.navigate(['/'+key])
        this.sendKey.ofBlogCard.next(key)
        
    }

    
    
    
}
