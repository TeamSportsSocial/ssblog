import {
  Component, 
  OnInit, 
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import {PropertyService} from "../../services/property.service";

@Component({
  selector: 'SportSocial-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
   
  @Input()  blogImage:string
  @Input()  bloggerName:string
  @Input()  bloggerImage:string
  @Input()  title:string
  @Input()  desc:string
  @Input()  dow:string
  @Input()  viewCount:string
  @Input()  shareCount:string
  @Input()  keys:string[]
  @Input()  exactDate:string
  
  blog:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string
  }

  @ViewChild('Desc') Desc;
  @ViewChild('latestTitle') latestTitle;
  @ViewChild('latestDesc') latestDesc;
  @ViewChild('readmore') readmore;
  @ViewChild('BloggerImage') Bloggerimage;
  constructor(private Send: PropertyService,private renderer:Renderer2) { }

  ngOnInit() {
    
    this.blog={
      blogImage:this.blogImage,
      bloggerName:this.bloggerName,
      bloggerImage:this.bloggerImage,
      title:this.title,
      desc:this.desc,
      dow:this.dow,
      viewCount:this.viewCount,
      shareCount:this.shareCount,
      keys:this.keys,
      exactDate:this.exactDate
     }
     if(window.innerWidth>=1000){
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','40px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','40px')
     }
     if(window.innerWidth>800 && window.innerWidth<1000){
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.3em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','40px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','40px')
    }
    if(window.innerWidth<700 && window.innerWidth>=400){
      this.renderer.setStyle(this.Desc.nativeElement,'height','80%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.2em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','1em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','35px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','35px')
    }
    if(window.innerWidth<400){
      this.renderer.setStyle(this.Desc.nativeElement,'height','95%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','0.95em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','0.95em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','32px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','32px')
    }
    
     
  }
  send(){
    // console.log(this.blog)
     this.Send.detailsofBlog.next(this.blog)
   }
  @HostListener('window:resize',[])onresize(){
    if(window.innerWidth>=1000){
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','40px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','40px')
     }
    if(window.innerWidth>800 && window.innerWidth<1000){
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.3em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','40px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','40px')
    }
    if(window.innerWidth<700 && window.innerWidth>=400){
      this.renderer.setStyle(this.Desc.nativeElement,'height','80%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.2em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','1em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','35px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','35px')
    }
    if(window.innerWidth<400){
      this.renderer.setStyle(this.Desc.nativeElement,'height','95%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.1em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','0.95em')
      this.renderer.setStyle(this.readmore.nativeElement,'font-size','0.95em')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'width','32px')
      this.renderer.setStyle(this.Bloggerimage.nativeElement,'height','32px')
    }
  }
  

}
