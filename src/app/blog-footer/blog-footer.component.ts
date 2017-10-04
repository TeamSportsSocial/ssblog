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
  @ViewChild('subscribeCard') subscribeCard;
  constructor(
    private sendEmail:PostService,
    private renderer: Renderer2,
    private status:StatusService,
  ) { }

  ngOnInit() {
    if(window.innerWidth>1150){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','70%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','70%')
    }
    if(window.innerWidth<1150 && window.innerWidth>1080){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','68%')
    }
    if(window.innerWidth<1080 && window.innerWidth>980){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','66%')
    }
    if(window.innerWidth<980 && window.innerWidth>920){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','65%')
    }
    if(window.innerWidth<920 && window.innerWidth>865 ){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','64.5%')
    }
    if(window.innerWidth<865 && window.innerWidth>820 ){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','64%')
    }
    if(window.innerWidth<820 && window.innerWidth>750){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
    }
    if(window.innerWidth<750 && window.innerWidth>700){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
    }
    if(window.innerWidth<700 && window.innerWidth>660){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
      
    }
    if(window.innerWidth<660 && window.innerWidth>620){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
    }
    if(window.innerWidth<620 && window.innerWidth>540){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','58%')
      
    }
    if(window.innerWidth<540 && window.innerWidth>470){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','51%')
    }
    if(window.innerWidth<=470 && window.innerWidth>400){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','47%')
     
    }
    if(window.innerWidth<400){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','42%')
     }
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
    console.log(this.showSubscriptionBox)
   }
  @HostListener('window:resize',[]) onresize(){
    if(window.innerWidth>1150){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','72%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','70%')
    }
    if(window.innerWidth<1150 && window.innerWidth>1080){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','68%')
    }
    if(window.innerWidth<1080 && window.innerWidth>980){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','66%')
    }
    if(window.innerWidth<980 && window.innerWidth>920){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','65%')
    }
    if(window.innerWidth<920 && window.innerWidth>865 ){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','64.5%')
    }
    if(window.innerWidth<865 && window.innerWidth>820 ){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','64%')
    }
    if(window.innerWidth<820 && window.innerWidth>750){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
    }
    if(window.innerWidth<750 && window.innerWidth>700){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
    }
    if(window.innerWidth<700 && window.innerWidth>660){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
      
    }
    if(window.innerWidth<660 && window.innerWidth>620){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
    }
    if(window.innerWidth<620 && window.innerWidth>540){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','58%')
      
    }
    if(window.innerWidth<540 && window.innerWidth>470){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','51%')
    }
    if(window.innerWidth<=470 && window.innerWidth>400){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','47%')
     
    }
    if(window.innerWidth<400){
      this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
      this.renderer.setStyle(this.subscriber.nativeElement,'width','42%')
     }
  }
}
