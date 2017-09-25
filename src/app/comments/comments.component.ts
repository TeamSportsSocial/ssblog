import { 
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';
import { 
  FacebookService, 
  LoginResponse, 
  LoginOptions, 
  UIResponse, 
  UIParams, 
  FBVideoComponent 
} from 'ngx-facebook';

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
  Comment:{
    userId:string;
    name:string;
    profilePicture:string;
    comment:string;
  }={
    userId:"",
    name:"",
    profilePicture:"",
    comment:''
  }
  constructor(private renderer:Renderer2,private fb: FacebookService) {
    fb.init({
      appId: '140286013252973',
      version: 'v2.10'
    });
   }
  private handleError(error) {
    console.error('Error processing action', error);
  }
  ngOnInit() {
    
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
  }
  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(
        (Log)=>{
          console.log(Log)
          if(Log.status=="unknown" || Log.status=="not_authorized"){
            this.isConnected=false;
            this.Comment.profilePicture="https://i2.wp.com/www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg?resize=250%2C280"
          }
          if(Log.status=="connected"){
            this.isConnected=true;
            this.getProfile();
          }
        }
      )
      .catch(console.error.bind(console));
  }
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        let ID= res.id
        console.log('Got the users profile', res);
        this.Comment.userId=res.id
        this.Comment.name=res.name
        this.Comment.profilePicture='http://graph.facebook.com/'+res.id+'/picture?type=large'
       
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
      console.log(this.Comment)
      this.textArea.nativeElement.value=""
    }
    
  }
}
