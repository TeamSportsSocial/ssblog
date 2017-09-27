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
  @Input() BlogId;
  profilePicture;
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
  Comment:{
    blogid:string;
    userid:string;
    comment:string;
  }={
    blogid:"",
    userid:"",
    comment:''
  }
  loginDetails:{
    id:string,
    email:string,
    name:string,
    isFb:string,
    image:string
  }={
    id:"",
    email:"",
    name:"",
    isFb:"1",
    image:''
  }
  dataforComments:{
    blogid:string
  }
  constructor(private renderer:Renderer2,private fb: FacebookService,private http:Http) {
    fb.init({
      appId: '140286013252973',
      version: 'v2.10'
    });
   }
  private handleError(error) {
    console.error('Error processing action', error);
  }
  ngOnInit() {
    //console.log(this.BlogId)
    if(window.innerWidth>900){
      this.renderer.setStyle(this.commentBox.nativeElement,'width','65%')
    }
    if(window.innerWidth<=900 && window.innerWidth>650){
      this.renderer.setStyle(this.commentBox.nativeElement,'width','80%')
   }
   if(window.innerWidth<650){
      
       this.renderer.setStyle(this.commentBox.nativeElement,'width','100%')
   }
   this.getLoginStatus()
   this.dataforComments={
     blogid:this.BlogId
   }
   console.log(this.dataforComments)
   this.getComments("https://test.sportsocial.in/user/loadBlogComment")
  }
  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(
        (Log)=>{
          console.log(Log)
          if(Log.status=="unknown" || Log.status=="not_authorized"){
            this.isConnected=false;
            this.profilePicture="https://i2.wp.com/www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg?resize=250%2C280"
            
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
    let commentDate=new Date(i)
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
        let ID= res.id
        console.log('Got the users profile', res);
        this.profilePicture='http://graph.facebook.com/'+res.id+'/picture?type=large'
        this.loginDetails={
          id:res.id,
          name:res.name,
          email:res.email,
          isFb:"1",
          image:this.profilePicture
        }
        console.log(this.loginDetails)
        this.http.post("https://test.sportsocial.in/user/blogLogin",this.loginDetails)
        .map(res=>res.json())
        .subscribe(
          res=>{
            console.log(res)
            console.log(res[0].UserId)
            this.Comment.userid=res[0].UserId
          }
        )
      })
      .catch(this.handleError);
  }

  @HostListener('window:resize',[])onresize(){
    if(window.innerWidth>900){
      this.renderer.setStyle(this.commentBox.nativeElement,'width','65%')
    }
    if(window.innerWidth<=900 && window.innerWidth>650){
      this.renderer.setStyle(this.commentBox.nativeElement,'width','80%')
   }
   if(window.innerWidth<650){
      
       this.renderer.setStyle(this.commentBox.nativeElement,'width','100%')
   }
  }
  
  getComments(url:string){
    this.http.post(url,this.dataforComments)
    .map(res=> res.json())
    .subscribe(
      res=>{
        console.log(res, "  r")
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
    console.log(this.recivedComment, "  n")
  }
  post(){
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
            //console.log(this.Comment)
          }
          
        })
        .catch(this.handleError);
    }
    console.log(this.isConnected)
    if(this.isConnected==true){
      this.Comment.comment=this.textArea.nativeElement.value
      this.Comment.blogid=this.BlogId
      console.log(this.Comment)
      this.textArea.nativeElement.value=""
      this.http.post("https://test.sportsocial.in/user/commentBlog",this.Comment)
      .map(res=>res.json())
      .subscribe(
        res=>{
          console.log(res, "c")
          this.newComment={
            userName:res[res.length-1].Name,
            image:res[res.length-1].Image,
            comment:res[res.length-1].Comment,
            commentDate:this.getDate(res[res.length-1].InsertedDate)
          }
          console.log(this.newComment, " m" )
          this.recivedComment.push(this.newComment)
        }
      )
    }
    
  }
}
