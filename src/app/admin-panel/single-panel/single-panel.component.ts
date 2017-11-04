import { 
  Component, 
  OnInit,
  Input,
  ViewChild,
  Renderer2
 } from '@angular/core';
import {Router} from '@angular/router';
import {PropertyService} from '../../services/property.service';
import {PostService} from '../../services/post.service';
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
  @ViewChild('panel') panel;
  constructor(
    private perform: PostService,
    private route :Router,
    private send: PropertyService,
    private renderer:Renderer2
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
  deleteBlog() {
    this.perform.deleteBlog(this.blog.blogId).subscribe(
      (res) => {
        console.log(res);
        if (res.Status === 'Success') {
          console.log('blog Deleted');
          this.renderer.setStyle(this.panel.nativeElement, 'display', 'none');
        }else {
          console.log('something went wrong');
        }
      }
    )
  }
}
