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
import { ɵgetDOM } from '@angular/platform-browser';
import { BlogOpenComponent } from '../../blogContent/blog-open/blog-open.component';

@Component({
  selector: 'SportSocial-normal-blog',
  templateUrl: './normal-blog.component.html',
  styleUrls: ['./normal-blog.component.css']
})
export class NormalBlogComponent  implements OnInit {

  @Input()  blogId:string;
  @Input()  blogImage:string;
  @Input()  bloggerImage:string;
  @Input()  bloggerName:string;
  @Input()  heading:string;
  @Input()  insertedDate:string;
  @Input()  content:string;
  @Input()  viewCount:string;
  @Input()  shareCount:string;
  @Input()  keywords:string[];
  @Input()  exactDate:string;
  @Input()  readingTime:string;
  @Input()  metaDesc: string;
  @Input()  imageDesc: string;
  @Input()  primaryKeyword: string;
  @Input()  shortTitle: string;
  Content:string;
  blog:{
    blogId:string,
    blogImage:string,
    bloggerName:string,
    // bloggerImage:string,
    heading:string,
    // content:string,
    insertedDate:string,
    viewCount:string,
    shareCount:string,
    // keywords:string[],
   // exactDate:string,
    // readingTime:string,
    metaDesc: string,
    imageDesc: string,
    primaryKeyword: string,
    // shortTitle: string
  };
  isBrowser: boolean;
  @ViewChild('blogTitle') blogTitle;
  @ViewChild('holder') holder;
  @ViewChild('fullImage') fullImage;
  @ViewChild('blog') Blog;
  @ViewChild('footer') footer;
  @ViewChild ('BlogOpenComponent') blogOpen;
  isloading:boolean=true;
  openFullImage:boolean=false;
  dataRecieved:boolean=false;
  constructor(
    private Send: PropertyService,
    private link: PropertyService,
    private renderer:Renderer2,
    private post:PostService,
    private recievewidth: PropertyService,
    private zone:NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) { 
    this.isBrowser= isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.Content = this.strip(this.content);
   this.blog={
    blogId:this.blogId,
    blogImage:this.blogImage,
    bloggerName:this.bloggerName,
    // bloggerImage:this.bloggerImage,
    heading:this.heading,
    // content:this.content,
    insertedDate:this.insertedDate,
    viewCount:this.viewCount,
    shareCount:this.shareCount,
    // keywords:this.keywords,
    // exactDate: this.exactDate,
    // readingTime: this.readingTime,
    metaDesc: this.metaDesc,
    imageDesc: this.imageDesc,
    primaryKeyword: this.primaryKeyword,
    // shortTitle: this.shortTitle
  };
   this.setVariableFont();
   if (this.blogImage) {
    this.dataRecieved = true;
   }
   // console.log(this.blogTitle)

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
    let width;
    this.recievewidth.ofWindow.subscribe(
    (data) => {
      width = data;
    }
    )
      if (width > 1200) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
      }
      if (width > 1100 && width < 1200) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (width < 1100 && width > 1000) {
      this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (width < 1000 && width > 950) {
      this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.15em');
      }
      if (width > 700 && width < 950) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
      }
      if (width > 600 && width < 700) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
      }
      if (width > 600 && width < 500) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
      }
      if (width > 500 && width < 600) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
      }
      if (width > 320 && width < 400) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
      }
      if (width < 320) {
        this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '0.9em');
      }
  }
 
  send() {
    this.Send.detailsofBlog.next(this.blog);
    // console.log(this.blogOpen);
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
