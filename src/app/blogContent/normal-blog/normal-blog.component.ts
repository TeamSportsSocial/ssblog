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
  @ViewChild('title') title;
  @Input() blogDetails:{
    img:string,
    bloggerName:string,
    title:string,
    dow:string,
    viewCount:string,
    shareCount:string
  }
  titleboxHeightInital;
  titleboxHeightFinal;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.titleboxHeightInital=this.title.nativeElement.getBoundingClientRect().height;
    this.titleboxHeightFinal=2*(this.titleboxHeightInital);
    //this.renderer.setStyle(this.title.nativeElement,"height",this.titleboxHeightFinal+"px")
    console.log(this.title)

    
  }
 
}
