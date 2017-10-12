import { 
  Component, 
  OnInit,
  Input
 } from '@angular/core';
import {Router} from "@angular/router";
import {PropertyService} from "../../services/property.service";
@Component({
  selector: 'SportSocial-single-panel',
  templateUrl: './single-panel.component.html',
  styleUrls: ['./single-panel.component.css']
})
export class SinglePanelComponent implements OnInit {

  @Input()  blogId:string  
  @Input()  blogImage:string
  @Input()  bloggerImage:string
  @Input()  bloggerName:string
  @Input()  heading:string
  @Input()  Content:string
  @Input()  keywords

  blog:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    heading:string,
    Content:string,
    keywords:string,
  }
  constructor(
    private route :Router,
    private send: PropertyService
  ) { }

  ngOnInit() {
    this.blog={
      blogId:this.blogId,
      blogImage:this.blogImage,
      bloggerName:this.bloggerName,
      bloggerImage:this.bloggerImage,
      heading:this.heading,
      Content:this.Content,
      keywords:this.keywords
    }
  }
  editBlog(){
    this.route.navigate(['/'+this.blogId+'/edit'])
    this.send.detailsofBlog.next(this.blog)
  }
}
