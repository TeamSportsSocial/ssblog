import { 
  Component, 
  OnInit,
  Input,
  ViewChild,
  Renderer2,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'SportSocialBlog-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {

  @Input() title;
  @Input() backgroundImage;

  @ViewChild('Keyword') Keyword:ElementRef;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.Keyword.nativeElement,'background-image',this.backgroundImage)
    this.renderer.addClass(this.Keyword.nativeElement,'image')
  }

}
