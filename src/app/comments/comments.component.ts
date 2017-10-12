import { 
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { 
  FacebookService, 
  LoginResponse, 
  LoginOptions, 
  UIResponse, 
  UIParams, 
  FBVideoComponent 
} from 'ngx-facebook';
import {Http} from "@angular/http";
import {PostService} from ".././services/post.service"
import {GetService} from ".././services/get.service"


@Component({
  selector: 'SportSocial-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @ViewChild('commentBox') commentBox;
  @ViewChild('textArea') textArea;
  @ViewChild('profileImage') profileImage;
  
  isConnected:boolean=false;
  profilePicture;
  userId;
  
  @Input() BlogId;
  
  newComment:{
    userName:string;
    image:string;
    comment:string;
    commentDate:string;
  }
  recivedComment:{
    userName:string;
    image:string;
    comment:string;
    commentDate:string;
  }[]=[]
  
  constructor(
    private renderer:Renderer2,
    private fb: FacebookService,
    private http:Http,
    private  sendUserInfo:PostService,
    private send:PostService,
    private loadComment:PostService
  ) {
    fb.init({
      appId: '1750709328507665',
      version: 'v2.10'
    });
   }
  private handleError(error) {
    console.error('Error processing action', error);
  }
  
  
  ngOnInit() {

    this.getLoginStatus()
    this.loadComment.ofBlog(this.BlogId).subscribe(
    res=>{
      console.log("aman")
        for(let i in res){
          this.recivedComment.push({
            userName:res[i].Name,
            image:res[i].Image,
            comment:res[i].Comment,
            commentDate:this.getDate(res[i].InsertedDate)
          })
        }
      }
    )
  }
  
  
  setDefault(event){
    this.profilePicture="/assets/images/user.png"
  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(
        (Log)=>{
          console.log(Log)
          if(Log.status=="unknown" || Log.status=="not_authorized"){
            this.isConnected=false;
            this.profilePicture="/assets/images/user.png"
          }
          if(Log.status=="connected"){
            this.isConnected=true;
            this.getProfile();
          }
        }
      )
      .catch(console.error.bind(console));
  }
  
  
  getDate(i:string){
    console.log(i)
    let commentDate=new Date(parseInt(i)*1000)
    let presentDate=new Date();
    console.log('p: ',"y= ",presentDate.getFullYear(),"mon= ",presentDate.getMonth(),"d= ",presentDate.getDate(),"h= ",presentDate.getHours(),"s= ",presentDate.getSeconds(),'t= ',presentDate.toDateString())
    console.log('c: ',"y= ",commentDate.getFullYear(),"mon= ",commentDate.getMonth(),"d= ",commentDate.getDate(),"h= ",commentDate.getHours(),"s= ",commentDate.getSeconds(),'t= ',commentDate.toDateString())
    if(commentDate.getFullYear()==presentDate.getFullYear()){
      if(commentDate.getMonth()==presentDate.getMonth()){
         if(presentDate.getDate()==commentDate.getDate()){
           if(presentDate.getHours()==commentDate.getHours()){
              if(presentDate.getMinutes()==commentDate.getMinutes()){
                if(presentDate.getSeconds()==commentDate.getSeconds()){
                  return "Just Now"
                }
                else{
                  return presentDate.getSeconds()-commentDate.getSeconds()+ " s"
                }
              }
              else{
                return presentDate.getMinutes()-commentDate.getMinutes()+" min"
              }
            }
            else{
              presentDate.getHours()-commentDate.getHours()+ " h"
            }
          }
          else{
            return presentDate.getDate()-commentDate.getDate()+" d"
          }
      }
      else{
        return presentDate.getMonth()-commentDate.getMonth()+ " month"
      }
    }
    else{
      return presentDate.getFullYear()-commentDate.getFullYear()+" yr"
    }
   
  }
  
  
  getProfile() {
    this.fb.api('/me', "get",{fields: 'email,name'})
      .then((res: any) => {
        console.log('Got the users profile', res);
        this.profilePicture='http://graph.facebook.com/'+res.id+'/picture?type=large'
        this.sendUserInfo.ofFacebookUser(res.id,res.name,res.email,this.profilePicture).subscribe(
          res=>{
            console.log(res," login")
            //console.log(res[0].UserId)
            this.userId=res[0].UserId
          }
        )
      })
      .catch(this.handleError);
  }

  

  
  
  
  post(){
    console.log(this.isConnected)
    console.log(this.textArea)
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };
    if(this.isConnected==false){
      this.fb.login(loginOptions)
        .then((res: LoginResponse) => {
          console.log('Logged in', res);
          if(res.status=="connected"){
            this.isConnected=true;
            this.getProfile();
          }       
        })
        .catch(this.handleError);
    }
    if(this.isConnected==true){
      this.send.userComment(this.BlogId,this.userId,this.textArea.nativeElement.value).subscribe(
        res=>{
          console.log(res, "c")
          this.textArea.nativeElement.value=""
          this.newComment={
            userName:res[res.length-1].Name,
            image:res[res.length-1].Image,
            comment:res[res.length-1].Comment,
            commentDate:this.getDate(res[res.length-1].InsertedDate)
          }
          console.log(this.newComment, " new comment" )
          this.recivedComment.push(this.newComment)
        }
      )
    }
  }
}
