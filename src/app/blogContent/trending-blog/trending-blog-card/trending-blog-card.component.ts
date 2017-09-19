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
  @Input() Blog:{
    title:string,
    viewCount:string,
    shareCount:string
    img:string,
  }
  constructor() { }

  ngOnInit() {
  }

}
