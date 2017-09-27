import {
  Component, 
  OnInit,
  Input,
  HostListener,
  ViewChild,
  Renderer2
} from '@angular/core';
import {PropertyService} from "../../services/property.service";
@Component({
  selector: 'SportSocial-normal-blog',
  templateUrl: './normal-blog.component.html',
  styleUrls: ['./normal-blog.component.css']
})
export class NormalBlogComponent implements OnInit {
  
  @Input()  blogId:string  
  @Input()  blogImage:string
  @Input()  bloggerImage:string
  @Input()  bloggerName:string
  @Input()  title:string
  @Input()  dow:string
  @Input()  desc:string
  @Input()  viewCount:string
  @Input()  shareCount:string
  @Input()  keywords:string[]
  @Input()  exactDate:string
  
  blog:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string
  }
  @ViewChild('blogTitle') blogTitle;
  @ViewChild('image') image;
  constructor(private Send: PropertyService,private renderer:Renderer2) { }

  ngOnInit() {  
    //console.log(this.title)  
   // console.log(this.Heading)
   //console.log(this.image)
   this.blog={
    blogId:this.blogId,
    blogImage:this.blogImage,
    bloggerName:this.bloggerName,
    bloggerImage:this.bloggerImage,
    title:this.title,
    desc:this.desc,
    dow:this.dow,
    viewCount:this.viewCount,
    shareCount:this.shareCount,
    keywords:this.keywords,
    exactDate:this.exactDate
   }
   console.log(this.blogImage)
   if(window.innerWidth>1100){
     this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
   }
   if(window.innerWidth<1100 && window.innerWidth>1000){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
   }
   if(window.innerWidth<1000 && window.innerWidth>950){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
   }
   if(window.innerWidth>750 && window.innerWidth<950){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
   }
   if(window.innerWidth>600 && window.innerWidth<750){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
   }
   if(window.innerWidth>600 && window.innerWidth<500){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
   }
   if(window.innerWidth>500 && window.innerWidth<600){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
   }
   if(window.innerWidth>300 && window.innerWidth<400){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
   }
  }
  send(){
    //console.log(this.blog)
    this.Send.detailsofBlog.next(this.blog)
  }
  @HostListener('window:resize',[])onresize(){
    if(window.innerWidth>1100){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
    }
    if(window.innerWidth<1100 && window.innerWidth>1000){
     this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
    }
    if(window.innerWidth<1000 && window.innerWidth>950){
     this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
    }
    if(window.innerWidth>750 && window.innerWidth<950){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>600 && window.innerWidth<750){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
     }
     if(window.innerWidth>600 && window.innerWidth<500){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>500 && window.innerWidth<600){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
     }
     if(window.innerWidth>300 && window.innerWidth<400){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1em')
     }
  }
}
