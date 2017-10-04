import { 
  Component, 
  OnInit,
} from '@angular/core';
import {GetService} from "../../services/get.service";

@Component({
  selector: 'SportSocial-trending-blog',
  templateUrl: './trending-blog.component.html',
  styleUrls: ['./trending-blog.component.css']
})
export class TrendingBlogComponent implements OnInit {
  blogDetails:{
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
    exactDate:string;
  }[]=[]
  constructor(
    private get: GetService,
  ) { }

  ngOnInit() {
  }

}
