import { 
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import {Http} from "@angular/http";
import {StatusService} from ".././services/status.service";
import {PostService} from ".././services/post.service"

@Component({
  selector: 'SportSocial-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent implements OnInit {
  showSubscriptionBox:boolean=false;
  errorMessage:boolean=false
  @ViewChild('subscriber') subscriber;
  constructor(
    private sendEmail:PostService,
    private renderer: Renderer2,
    private status:StatusService,
  ) { }

  ngOnInit() {
   
  }
  Subscribe(){
    if(this.subscriber.nativeElement.validity.valid==true && this.subscriber.nativeElement.value){
      this.sendEmail.ofUser(this.subscriber.nativeElement.value)
      .subscribe(
        res=>{
          //console.log(res.Status)
          if(res.Status=="Success"){
            this.showSubscriptionBox=true;
            //console.log(this.showSubscriptionBox)
            this.subscriber.nativeElement.value=""
            this.errorMessage=false;
          }
        }
      )
    }
    else{
      this.subscriber.nativeElement.value=""
      this.errorMessage=true
    }
  }
  close(){
    this.showSubscriptionBox=false;
    //console.log(this.showSubscriptionBox)
   }
  
}
