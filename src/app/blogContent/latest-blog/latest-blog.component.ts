import {
  Component, 
  OnInit, 
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChild,
  NgZone
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
  
  isloading:boolean=true;
  dataRecieved:boolean=false;
  @ViewChild('Desc') Desc;
  @ViewChild('latestTitle') latestTitle;
  @ViewChild('latestDesc') latestDesc;
  @ViewChild('blogImage') blogimage;
  @ViewChild('latest') latest;
  @ViewChild('initialImage') initialImage;
  constructor(
    private Send: PropertyService,
    private renderer:Renderer2,
    private post: PostService,
    private zone :NgZone
  ) { }

  ngOnInit() {
    //console.log(this.latest)
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
    if(window.innerWidth<600 ){
      this.renderer.setStyle(this.Desc.nativeElement,'height','75%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.6em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.3em')
    }
    if(this.blogImage){
      this.dataRecieved=true
      console.log("blogImage")
    }
     
  }
  ngAfterViewInit(){
    this.heightOfInitialImage();
    if(this.blogImage){
      this.dataRecieved=true
      console.log("blogImage")
    }
  }
  removeInitialImage(){
    this.isloading=false
  }
   
  setDefault(){
    this.blogImage="/assets/images/default-image.png"
  }
  reloadPage() { 
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }
  send(){
      this.Send.detailsofBlog.next(this.blog)
      window.scrollTo(0,0)
  }
  openfullImage(){
    this.openFullImage=true;
  }
  closeFullImage(){
    this.openFullImage=false;
  }
  heightOfInitialImage(){
    if(window.innerWidth<=600){
    let width=this.initialImage.nativeElement.getBoundingClientRect().width
    let height=.75*width
    this.renderer.setStyle(this.initialImage.nativeElement,'height',height+ 'px')
    }
  }
  @HostListener('window:resize',[])onresize(){
    this.heightOfInitialImage();
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
    if(window.innerWidth<600 ){
      this.renderer.setStyle(this.Desc.nativeElement,'height','75%')
      this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
      this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
    }
    
  }
  

}
