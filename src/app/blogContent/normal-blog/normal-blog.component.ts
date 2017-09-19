import {
  Component, 
  OnInit,
  Input,
  HostListener,
  ViewChild
} from '@angular/core';
import {PropertyService} from "../../services/property.service";
@Component({
  selector: 'SportSocial-normal-blog',
  templateUrl: './normal-blog.component.html',
  styleUrls: ['./normal-blog.component.css']
})
export class NormalBlogComponent implements OnInit {
  @Input() blogDetails:{
    img:string,
    bloggerName:string,
    title:string,
    dow:string,
    viewCount:string,
    shareCount:string
  }

  constructor() { }

  ngOnInit() {
  }

}
