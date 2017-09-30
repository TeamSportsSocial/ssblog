import { 
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import {PostService} from ".././services/post.service"
import {StatusService} from ".././services/status.service";

@Component({
  selector: 'SportSocial-subscribe-card',
  templateUrl: './subscribe-card.component.html',
  styleUrls: ['./subscribe-card.component.css']
})
export class SubscribeCardComponent implements OnInit {
  Email:{
    userid:string;
    email:string;
  }
  showSubscriptionBox:boolean=false;
  @ViewChild('subscriber') subscriber;
  constructor( private sendEmail:PostService,private status:StatusService) { }

  ngOnInit() {
  }
  Subscribe(){
    if(this.subscriber.nativeElement.validity.valid==true && this.subscriber.nativeElement.value){
      this.sendEmail.ofUser(this.subscriber.nativeElement.value)
      .subscribe(
        res=>{
          console.log(res.Status)
          if(res.Status=="Success"){
            this.showSubscriptionBox=true;
            console.log(this.showSubscriptionBox)
            this.subscriber.nativeElement.value=""
          }
        }
      )
    }
    else{
      this.subscriber.nativeElement.value=""
    }
  }
  close(){
    this.showSubscriptionBox=false;
    console.log(this.showSubscriptionBox)
   }
}
