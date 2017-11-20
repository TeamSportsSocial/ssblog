import {
  Component,
  OnInit,
  Input,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {PropertyService} from '../../../services/property.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'SportSocial-trending-blog-card',
  templateUrl: './trending-blog-card.component.html',
  styleUrls: ['./trending-blog-card.component.css']
})
export class TrendingBlogCardComponent implements OnInit {
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
  @Input() PrimaryKeyword: string;
  @Input() ShortTitle: string;
  isloading:boolean=true;
  dataRecieved:boolean=false;
  isBrowser: boolean;
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
    Metadesc: string,
    ImageDesc: string,
    PrimaryKeyword: string,
    ShortTilte: string
  };
  constructor(private Send: PropertyService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

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
      readingTime:this.readingTime,
      Metadesc: this.MetaDesc,
      ImageDesc: this.ImageDesc,
      PrimaryKeyword: this.PrimaryKeyword,
      ShortTilte: this.ShortTitle
    };
    if(this.blogImage){
      this.dataRecieved=true;

    }
  }
  ngAfterViewInit(){

    if(this.blogImage){
      this.dataRecieved=true;

    }
  }
  send() {
    this.Send.detailsofBlog.next(this.blog);
      window.scrollTo(0, 0);
  }
  setDefault(event){
    this.blogImage='/assets/images/default-image.png';
  }


  removeInitialImage(){
    this.isloading=false;
  }


}
