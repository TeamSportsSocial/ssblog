import {
  Component, 
  OnInit, 
  Input
} from '@angular/core';

@Component({
  selector: 'SportSocial-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {
  @Input() blogDetails:{
    img:string,
    bloggerName:string,
    bloggerImg:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    tag:string
  }
  constructor() { }

  ngOnInit() {
  }

}
