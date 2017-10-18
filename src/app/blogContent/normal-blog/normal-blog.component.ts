import {
  Component, 
  OnInit,
  Input,
  HostListener,
  ViewChild,
  Renderer2,
  NgZone
} from '@angular/core';
import {PropertyService} from "../../services/property.service";
import {PostService} from "../../services/post.service";

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
  @Input()  ViewCount:string
  @Input()  ShareCount:string
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
    ViewCount:string,
    ShareCount:string,
    keywords:string[],
    exactDate:string,
    readingTime:string
  }
  @ViewChild('blogTitle') blogTitle;
  @ViewChild('holder') holder;
  @ViewChild('fullImage') fullImage;
  @ViewChild('blog') Blog;
  @ViewChild('footer') footer;
  isloading:boolean=true;
  openFullImage:boolean=false;
  dataRecieved:boolean=false
  constructor(
    private Send: PropertyService,
    private renderer:Renderer2,
    private post :PostService,
    private zone:NgZone
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
  this.setVariableFont()
   if(this.blogImage){
    this.dataRecieved=true
   }
   

  }
  
  ngAfterViewInit(){
    if(this.blogImage){
      this.dataRecieved=true
    }
  }
  
  reloadPage() { 
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }
  
  setVariableFont(){
    /* let heightOfTitle=this.blogTitle.nativeElement.getBoundingClientRect().height
    let char=this.blog.heading.length
    let font;
    console.log(this.blog.heading,heightOfTitle,this.blogTitle)
    if(char>100){
      font=0.9
    }
    if(char>75 && char<=100){
      font=1.1
    }
    if(char>50 && char<=75){
      font=1.2
    }
    if(char<=50 && char>40){
      font=1.25
    }
    if(char<=40){
      font=1.3
    }
    this.renderer.setStyle(this.blogTitle.nativeElement,'font-size',font+"em") */
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
  setHeightOfTitle(){
    
    let heightofBlog=this.Blog.nativeElement.getBoundingClientRect().height

    let heightofHolder=this.holder.nativeElement.getBoundingClientRect().height
    
    let heightofFooter=heightofBlog-heightofHolder

    let heightofFirstChild=this.footer.nativeElement.children[0].offsetHeight

    let heightofThirdChild=this.footer.nativeElement.children[2].offsetHeight

    let heightOfTitle = heightofFooter-heightofFirstChild-heightofThirdChild-18

    this.renderer.setStyle(this.blogTitle.nativeElement,'height',heightOfTitle+'px')

    let topMargin=(heightofFooter-heightofFirstChild-heightOfTitle-heightofThirdChild)/2

    //this.renderer.setStyle(this.blogTitle.nativeElement,'margin-top',topMargin+"px")
    //console.log(this.blog.heading,heightofFooter,heightofFirstChild,heightOfTitle,heightofThirdChild,this.blog.heading.length)
   
  }
  send(){
    this.Send.detailsofBlog.next(this.blog)
    window.scrollTo(0,0)
  }
  
  
  setDefault(event){
    this.blogImage="/assets/images/default-image.png"
  }
  
  
  removeInitialImage(){
    this.isloading=false;
  }
  
  
  @HostListener('window:resize',[])onresize(){
    this.setVariableFont()
  }

}
