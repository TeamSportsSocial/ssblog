import { 
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'SportSocial-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll',[])onresize(){
    
  }
}
