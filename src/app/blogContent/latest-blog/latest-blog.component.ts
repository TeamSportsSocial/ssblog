import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChild,
  NgZone,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {PostService} from '../../services/post.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'SportSocial-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {

  openFullImage:boolean=false;
  content:string;
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
  @Input()  MetaDesc: string;
  @Input()  ImageDesc: string

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
    readingTime:string,
    MetaDesc: string,
    ImageDesc: string
  }

  isloading:boolean=true;
  dataRecieved:boolean=false;
  isBrowser: boolean;
  @ViewChild('DescChild') DescChild;
  @ViewChild('latestTitle') latestTitle;
  @ViewChild('latestDesc') latestDesc;
  @ViewChild('blogimage') blogimage;
  @ViewChild('latest') latest;
  @ViewChild('initialImage') initialImage;
  @ViewChild('Desc') Desc;
  constructor(
    private Send: PropertyService,
    private renderer:Renderer2,
    private post: PostService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  ngOnInit() {
    this.content = this.strip( this.Content);
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
      readingTime:this.readingTime,
      MetaDesc: this.MetaDesc,
      ImageDesc: this.ImageDesc
     }
     this.responsiveDesign()
    if(this.blogImage){
      this.dataRecieved=true

    }


  }
  ngAfterViewInit(){
    this.heightOfInitialImage();
    if(this.blogImage){
      this.dataRecieved=true

    }
  }

  strip(html) {
    const tmp = this.renderer.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  removeInitialImage(){
    this.isloading=false

  }

  setDefault(){
    this.blogImage='/assets/images/default-image.png'
  }
  send(){
      this.Send.detailsofBlog.next(this.blog)
      if  ( this.isBrowser ) {
        window.scrollTo(0, 0);
      }
  }
  openfullImage() {
    this.openFullImage = true;
  }
  closeFullImage() {
    this.openFullImage = false;
  }
  heightOfInitialImage() {
      if  ( window.innerWidth <=  600 ) {
        const width = this.initialImage.nativeElement.getBoundingClientRect().width;
        const height = .72 * width;
        this.renderer.setStyle(this.initialImage.nativeElement, 'height', height + 'px');
      }
  }

  @HostListener('window:resize',[])onresize(){
    this.responsiveDesign()
  }

  responsiveDesign(){
      if(window.innerWidth >= 1000) {
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','8% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','2.2em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
      }
      if(window.innerWidth>800 && window.innerWidth<1000){
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','8% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.8em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.2em')
      }
      if (window.innerWidth<800 && window.innerWidth>=600){
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','4% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1.1em')
      }
      if (window.innerWidth<600 && window.innerWidth>400 ){
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','15% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.4em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1em')
      }
      if(window.innerWidth<400 && window.innerWidth>340){
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','15% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.3em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1em')
      }
      if(window.innerWidth<340){
        this.renderer.setStyle(this.DescChild.nativeElement,'margin','15% auto')
        this.renderer.setStyle(this.latestTitle.nativeElement,'font-size','1.2em')
        this.renderer.setStyle(this.latestDesc.nativeElement,'font-size','1em')
      }
  }


}
