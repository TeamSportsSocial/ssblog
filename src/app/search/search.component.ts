import { 
  Component, 
  OnInit,
  ViewChild,
  Renderer2,
  HostListener
} from '@angular/core';
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topMargin;

  @ViewChild('searchPage') searchPage;
  constructor(private recieveHeight:PropertyService,private renderer:Renderer2) { }

  ngOnInit() {
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
      this.topMargin=margin
      }
   )
   this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
  }
  ngAfterViewInit(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
      this.topMargin=margin
      }
  )
  }

}
