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
  @Input()  heading:string
  @Input()  insertedDate:string
  @Input()  Content:string
  @Input()  viewCount:string
  @Input()  shareCount:string
  @Input()  keywords:string[]
  @Input()  exactDate:string
  @Input()  readingTime:string
  
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
    exactDate:string,
    readingTime:string
  }
  @ViewChild('blogTitle') blogTitle;
  @ViewChild('holder') holder;
  @ViewChild('fullImage') fullImage;

  loading:boolean=true;
  openFullImage:boolean=false;
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
    exactDate:this.exactDate,
    readingTime:this.readingTime
   }
   if(window.innerWidth>1100){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
  }
  if(window.innerWidth<1100 && window.innerWidth>1000){
   this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
  }
  if(window.innerWidth<1000 && window.innerWidth>950){
   this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.25em')
  }
  if(window.innerWidth>700 && window.innerWidth<950){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.25em')
   }
   if(window.innerWidth>600 && window.innerWidth<700){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
   }
   if(window.innerWidth>600 && window.innerWidth<500){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
   }
   if(window.innerWidth>500 && window.innerWidth<600){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
   }
   if(window.innerWidth>300 && window.innerWidth<400){
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
   }
   

  }
  openfullImage(){
    this.openFullImage=true;
  }
  closeFullImage(){
    this.openFullImage=false;
  }
  send(){
    console.log(this.blog)
    this.Send.detailsofBlog.next(this.blog)
    window.scrollTo(0,0)
  }
  setDefault(event){
    this.blogImage="/assets/images/default-image.png"
  }
  setInitialImage(){
    this.renderer.removeStyle(this.holder.nativeElement,'background-image')
  }
  @HostListener('window:resize',[])onresize(){
    if(window.innerWidth>1100){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
    }
    if(window.innerWidth<1100 && window.innerWidth>1000){
     this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
    }
    if(window.innerWidth<1000 && window.innerWidth>950){
     this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.25em')
    }
    if(window.innerWidth>700 && window.innerWidth<950){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.25em')
     }
     if(window.innerWidth>600 && window.innerWidth<700){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>600 && window.innerWidth<500){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.3em')
     }
     if(window.innerWidth>500 && window.innerWidth<600){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.2em')
     }
     if(window.innerWidth>300 && window.innerWidth<400){
      this.renderer.setStyle(this.blogTitle.nativeElement,'font-size','1.1em')
     }
  }
}
