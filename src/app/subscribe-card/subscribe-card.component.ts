import { 
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import {Http} from "@angular/http";

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
  @ViewChild('subscriber') subscriber;
  constructor(private http:Http) { }

  ngOnInit() {
  }
  Subscribe(){
    this.Email={
      userid:"2",
      email:this.subscriber.nativeElement.value
    }
   // console.log(this.subscriber.nativeElement.value)
    console.log(this.Email)
    this.http.post("http://admin.chaseyoursport.com/blog/subscribeBlog",this.Email)
    .subscribe(
      res=>{
        console.log(res)
      }
    )
  }
}
