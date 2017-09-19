import { 
  Component, 
  OnInit,
} from '@angular/core';

@Component({
  selector: 'SportSocial-trending-blog',
  templateUrl: './trending-blog.component.html',
  styleUrls: ['./trending-blog.component.css']
})
export class TrendingBlogComponent implements OnInit {
  blogDetails:{
    img:string,
    title:string,
    viewCount:string,
    shareCount:string,
  }
  constructor() { }

  ngOnInit() {
  }

}
