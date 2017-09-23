import {
  Component, 
  OnInit, 
  Input
} from '@angular/core';
import {PropertyService} from "../../services/property.service";

@Component({
  selector: 'SportSocial-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
   
  @Input()  blogImage:string
  @Input()  bloggerName:string
  @Input()  bloggerImage:string
  @Input()  title:string
  @Input()  desc:string
  @Input()  dow:string
  @Input()  viewCount:string
  @Input()  shareCount:string
  @Input()  keys:string
  
  blog:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string
  }
  constructor(private Send: PropertyService) { }

  ngOnInit() {
    
    this.blog={
      blogImage:this.blogImage,
      bloggerName:this.bloggerName,
      bloggerImage:this.bloggerImage,
      title:this.title,
      desc:this.desc,
      dow:this.dow,
      viewCount:this.viewCount,
      shareCount:this.shareCount,
      keys:this.keys
     }
     
  }
  ngAfterViewInit(){
  }
  send(){
    console.log(this.blog)
    this.Send.detailsofBlog.next(this.blog)
  }

}
