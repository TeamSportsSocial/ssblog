import { 
    Component, 
    OnInit,
    ViewChild,
    Renderer2,
    HostListener
 } from '@angular/core';
import {PropertyService} from "../../services/property.service";

@Component({
  selector: 'SportSocial-blog-open',
  templateUrl: './blog-open.component.html',
  styleUrls: ['./blog-open.component.css']
})
export class BlogOpenComponent implements OnInit {
  
    blog;
    topMargin;
    @ViewChild('openBlog') openBlog;
    constructor(
        private recieve:PropertyService ,
        private recieveHeight:PropertyService,
        private renderer :Renderer2
    ) { }

    ngOnInit() {
        console.log(this.openBlog)
      this.recieve.detailsofBlog.subscribe(
          (data)=>{
              this.blog=data;
          }
      )
      this.recieveHeight.ofHeader.subscribe(
        margin=>{
          this.topMargin=margin
        }
      )
      console.log(this.topMargin)
      this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"px")
    }
    ngAfterViewInit () {
        !function(d,s,id){
            var js: any,
                fjs=d.getElementsByTagName(s)[0],
                p='https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,"script","twitter-wjs");
         
    }
    @HostListener('window:resize',[]) onresize(){
        this.recieveHeight.ofHeader.subscribe(
            margin=>{
              this.topMargin=margin
            }
        )
        this.renderer.setStyle(this.openBlog.nativeElement,"margin-top",this.topMargin+"5"+"px")
    }
}
