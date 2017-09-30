import { Component, OnInit,ViewChild,Input,Renderer2} from '@angular/core';
import {StatusService} from ".././services/status.service";

@Component({
  selector: 'SportSocial-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('subscriptionBox') subscriptionBox;
  @Input() showSubscriptionBox;

  constructor(private status: StatusService,private renderer:Renderer2) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    //console.log(this.showSubscriptionBox)
    console.log(this.showSubscriptionBox," gfghj")
  }
  close(){
   this.showSubscriptionBox=false;
   console.log(this.showSubscriptionBox)
  }
}
