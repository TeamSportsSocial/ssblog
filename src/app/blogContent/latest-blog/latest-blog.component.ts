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
import {PostService} from "../../services/post.service";

@Component({
  selector: 'SportSocial-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
   
  openFullImage:boolean=false;

  @Input()  blogId:string
  @Input()  blogImage:string
  @Input()  bloggerName:string
  @Input()  bloggerImage:string
  @Input()  heading:string
  @Input()  Content:string
  @Input()  insertedDate:string
  @Input()  ViewCount:string
  @Input()  ShareCount:string
  @Input()  keywords:string[]
  @Input()  exactDate:string
  @Input()  readingTime:string;
  
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
    exactDate:string,
    readingTime:string
  }

  @ViewChild('Desc') Desc;
  @ViewChild('latestTitle') latestTitle;
  @ViewChild('latestDesc') latestDesc;
  @ViewChild('readmore') readmore;
  @ViewChild('BloggerImage') Bloggerimage;
  constructor(
    private Send: PropertyService,
    private renderer:Renderer2,
    private post: PostService
  ) { }

  ngOnInit() {
    
    this.blog={
      blogId:this.blogId,
      blogImage:this.blogImage,
      bloggerName:this.bloggerName,
      bloggerImage:this.bloggerImage,
      heading:this.heading,
      Content:this.Content,
      insertedDate:this.insertedDate,
      ViewCount:this.ViewCount,
      ShareCount:this.ShareCount,
      keywords:this.keywords,
      exactDate:this.exactDate,
      readingTime:this.readingTime
     }
     if(window.innerWidth>=1000){
      this.renderer.setStyle(this.Desc.nativeElement,'height','70%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','2.2em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>800 && window.innerWidth<1000){
      this.renderer.setStyle(this.Desc.nativeElement,'height','75%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.8em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
    }
    if(window.innerWidth<800 && window.innerWidth>=600){
      this.renderer.setStyle(this.Desc.nativeElement,'height','85%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
    }
    if(window.innerWidth<600){
      this.renderer.setStyle(this.Desc.nativeElement,'height','70%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.6em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.3em')
    }
    
     
  }
  send(){
      console.log(this.blog)
      this.Send.detailsofBlog.next(this.blog)
      this.post.viewCountOfBlog(this.blogId).subscribe(
        data=>{
          console.log(data)
        }
      )
      window.scrollTo(0,0)
  }
  openfullImage(){
    this.openFullImage=true;
  }
  closeFullImage(){
    this.openFullImage=false;
  }

  @HostListener('window:resize',[])onresize(){
    if(window.innerWidth>=1000){
      this.renderer.setStyle(this.Desc.nativeElement,'height','70%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','2.2em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>800 && window.innerWidth<1000){
      this.renderer.setStyle(this.Desc.nativeElement,'height','75%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.8em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
    }
    if(window.innerWidth<800 && window.innerWidth>=600){
      this.renderer.setStyle(this.Desc.nativeElement,'height','85%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
    }
    if(window.innerWidth<600){
      this.renderer.setStyle(this.Desc.nativeElement,'height','70%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
    }
    
  }
  

}
