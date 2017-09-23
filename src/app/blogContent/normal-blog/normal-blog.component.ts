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
  
  @Input()  blogImage:string
  @Input()  bloggerImage:string
  @Input()  bloggerName:string
  @Input()  title:string
  @Input()  dow:string
  @Input()  desc:string
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
    //console.log(this.title)  
   // console.log(this.Heading)
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
  send(){
    //console.log(this.blog)
    this.Send.detailsofBlog.next(this.blog)
  }
}
