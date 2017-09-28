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
   
  @Input()  blogId:string
  @Input()  blogImage:string
  @Input()  bloggerName:string
  @Input()  bloggerImage:string
  @Input()  heading:string
  @Input()  Content:string
  @Input()  insertedDate:string
  @Input()  viewCount:string
  @Input()  shareCount:string
  @Input()  keywords:string[]
  @Input()  exactDate:string
  
  blog:{
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
      blogId:this.blogId,
      blogImage:this.blogImage,
      bloggerName:this.bloggerName,
      bloggerImage:this.bloggerImage,
      heading:this.heading,
      Content:this.Content,
      insertedDate:this.insertedDate,
      viewCount:this.viewCount,
      shareCount:this.shareCount,
      keywords:this.keywords,
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
