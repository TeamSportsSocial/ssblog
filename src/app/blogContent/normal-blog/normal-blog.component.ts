import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewChild,
  Renderer2,
  NgZone,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {PostService} from '../../services/post.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'SportSocial-normal-blog',
  templateUrl: './normal-blog.component.html',
  styleUrls: ['./normal-blog.component.css']
})
export class NormalBlogComponent implements OnInit {

  @Input()  blogId:string;
  @Input()  blogImage:string;
  @Input()  bloggerImage:string;
  @Input()  bloggerName:string;
  @Input()  heading:string;
  @Input()  insertedDate:string;
  @Input()  Content:string;
  @Input()  ViewCount:string;
  @Input()  ShareCount:string;
  @Input()  keywords:string[];
  @Input()  exactDate:string;
  @Input()  readingTime:string;
  @Input()  MetaDesc: string;
  @Input()  ImageDesc: string;

  content:string;
  blog:{
    blogId:string,
    blogImage:string,
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
  };
  isBrowser: boolean;
  @ViewChild('blogTitle') blogTitle;
  @ViewChild('holder') holder;
  @ViewChild('fullImage') fullImage;
  @ViewChild('blog') Blog;
  @ViewChild('footer') footer;
  isloading:boolean=true;
  openFullImage:boolean=false;
  dataRecieved:boolean=false;
  constructor(
    private Send: PropertyService,
    private renderer:Renderer2,
    private post:PostService,
    private zone:NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) { 
    this.isBrowser= isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.content = this.strip(this.Content);
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
    exactDate: this.exactDate,
    readingTime: this.readingTime,
    MetaDesc: this.MetaDesc,
    ImageDesc: this.ImageDesc
  };
   this.setVariableFont();
   if (this.blogImage) {
    this.dataRecieved = true;
   }
   //console.log(this.blogTitle)

  }

  strip(html) {
     const tmp = this.renderer.createElement('DIV');
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || '';
  }

  ngAfterViewInit() {
    if (this.blogImage) {
      this.dataRecieved = true;
    }
  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }


  setVariableFont() {
      if (window.innerWidth > 1200) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
      }
      if (window.innerWidth > 1100 && window.innerWidth < 1200) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (window.innerWidth < 1100 && window.innerWidth > 1000) {
      this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (window.innerWidth < 1000 && window.innerWidth > 950) {
      this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.15em');
      }
      if (window.innerWidth > 700 && window.innerWidth < 950) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
      }
      if (window.innerWidth > 600 && window.innerWidth < 700) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
      }
      if (window.innerWidth > 600 && window.innerWidth < 500) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
      }
      if (window.innerWidth > 500 && window.innerWidth < 600) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (window.innerWidth > 320 && window.innerWidth < 400) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
      }
      if (window.innerWidth < 320) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '0.9em');
      }
  }
 
  send() {
    this.Send.detailsofBlog.next(this.blog);
    if ( this.isBrowser ) {
      window.scrollTo(0, 0);
    }
  }


  setDefault(event) {
    this.blogImage = '/assets/images/default-image.png';
  }


  removeInitialImage() {
    this.isloading = false;
  }


  @HostListener('window:resize', [])onresize() {
    this.setVariableFont();
  }

}
