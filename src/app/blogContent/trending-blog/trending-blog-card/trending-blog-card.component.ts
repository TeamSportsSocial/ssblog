import { 
  Component, 
  OnInit,
  Input 
} from '@angular/core';

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
    exactDate:string
  }
  constructor() { }

  ngOnInit() {
  }

}
