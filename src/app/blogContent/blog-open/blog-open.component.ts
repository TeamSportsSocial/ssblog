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
import {ActivatedRoute} from "@angular/router";
import { 
    FacebookService, 
    LoginResponse, 
    LoginOptions, 
    UIResponse, 
    UIParams, 
    FBVideoComponent 
} from 'ngx-facebook';

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
        private http:Http
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
        if(window.innerWidth<=900){
           this.removeSocial=true; 
           this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%')
        }
        else{
            this.removeSocial=false;
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','65%')
        }
        console.log(this.blog)

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
        if(window.innerWidth<=900){
            this.removeSocial=true; 
            this.renderer.setStyle(this.BlogInfo.nativeElement,'width','100%')
         }
         else{
             this.removeSocial=false;
             this.renderer.setStyle(this.BlogInfo.nativeElement,'width','65%')
         }
        
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
            console.log(res, "r")
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

    
}
