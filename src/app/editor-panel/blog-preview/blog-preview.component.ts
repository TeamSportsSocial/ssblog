import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'sportsocial-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  

  @Input() Preview:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  closePreview(){
    
  }

}
