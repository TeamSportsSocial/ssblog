import { 
  Component, 
  OnInit,
  Input 
} from '@angular/core';
import {PropertyService} from "../../../services/property.service";

@Component({
  selector: 'SportSocial-trending-blog-card',
  templateUrl: './trending-blog-card.component.html',
  styleUrls: ['./trending-blog-card.component.css']
})
export class TrendingBlogCardComponent implements OnInit {
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
  
  isloading:boolean=true;
  dataRecieved:boolean=false;
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
    readingTime:string
  }
  constructor(private Send: PropertyService) { }

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
    if(this.blogImage){
      this.dataRecieved=true
     
    }
  }
  ngAfterViewInit(){
   
    if(this.blogImage){
      this.dataRecieved=true
     
    }
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
  

}
