import {
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef,
  Input,
  NgZone,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {Http} from '@angular/http';
import {PostService} from '.././services/post.service';
import {GetService} from '.././services/get.service';
import {FacebookService} from '.././services/facebook.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var window: any;
declare var FB: any;


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
  token: any;
  loged: boolean = false;
  user = { name: 'Hello' };
  isBrowser: boolean;
  @Input() BlogId;

  newComment:{
    userName: string;
    image: string;
    comment: string;
    commentDate: string;
  };
  recivedComment: {
    userName: string;
    image: string;
    comment: string;
    commentDate: string;
  }[]=[];

  constructor(
    private renderer: Renderer2,
    private Fb: FacebookService,
    private http: Http,
    private  sendUserInfo: PostService,
    private send: PostService,
    private loadComment: PostService,
    private zone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (isPlatformBrowser(platformId)){
      Fb.init();
    }
  }

  ngOnInit() {
    this.loadComment.ofBlog(this.BlogId).subscribe(
    res => {
        for(const i in res){
          this.recivedComment.push({
            userName:res[i].Name,
            image:res[i].Image,
            comment:res[i].Comment,
            commentDate:this.getDate(res[i].InsertedDate)
          });
        }
      }
    );
  }

  setDefault() {
    this.profilePicture = '/assets/images/user.png';
  }


  getDate(i: string) {
    // console.log(i);
    const commentDate = new Date(parseInt(i)*1000);
    const presentDate = new Date();
      if (commentDate.getFullYear() === presentDate.getFullYear()) {
      if (commentDate.getMonth() === presentDate.getMonth()) {
         if (presentDate.getDate() === commentDate.getDate()) {
           if (presentDate.getHours() === commentDate.getHours()) {
              if (presentDate.getMinutes() === commentDate.getMinutes()) {
                if (presentDate.getSeconds() === commentDate.getSeconds()) {
                  return 'Just Now';
                } else {
                  return presentDate.getSeconds() - commentDate.getSeconds() + ' s';
                }
              } else {
                return presentDate.getMinutes() - commentDate.getMinutes() + ' min';
              }
            }else {
              presentDate.getHours() - commentDate.getHours() +  ' h';
            }
          }else {
            return presentDate.getDate() - commentDate.getDate() + ' d';
          }
      } else {
        return presentDate.getMonth() - commentDate.getMonth() + ' month';
      }
    } else {
      return presentDate.getFullYear() - commentDate.getFullYear() + ' yr';
    }

  }

  getLoginStatus() {
    FB.getLoginStatus(function(response) {
      // console.log(response, ' conect');
      if (response.status === 'connected') {
        // console.log('conect');
        this.isConnected = true;
        this.profilePicture = `https://graph.facebook.com/` + response.authResponse.userID + `/picture?type=large`;
      }else {
        // console.log('logged out');
      }
    });
  }

  login() {
    if(this.isBrowser){
      FB.login((response: any) => {
        if (response.status === 'connected') {
          this.loged = true;
          this.token = response;
          this.isConnected = true;
          this.profilePicture = `https://graph.facebook.com/` + response.authResponse.userID + `/picture?type=large`;
          this.me();
         //  console.log(this.user);
        } else if (response.status === 'not_authorized') {
         //  console.log('conect1');
        } else {
         //  console.log('conect2');
        }

      }, {scope: 'user_friends,email'});
    }
  }

  me() {
    if(this.isBrowser){
      FB.api('/me?fields=id,name,picture.type(large),email',
      (result) => {
          if (result && !result.error) {
              this.user = result;
             //  console.log(this.user, 'conect');
              // console.log(this.profilePicture);
              this.sendUserInfo.ofFacebookUser(result.id, result.name, result.email, this.profilePicture).subscribe(
                res => {
                 //  console.log(res, ' login');
                  this.userId = res[0].UserId;
                }
              );

          } else {
             //  console.log(result.error);
          }
      });
    }
  }
  post() {
    if (this.isConnected !== true) {
      this.login();
    }
   this.send.userComment(this.BlogId, this.userId, this.textArea.nativeElement.value).subscribe(
    res => {
      // console.log(res, 'c');
      this.textArea.nativeElement.value = '';
      this.newComment = {
        userName: res[res.length - 1].Name,
        image: res[res.length - 1].Image,
        comment: res[res.length - 1].Comment,
        commentDate: this.getDate(res[res.length - 1].InsertedDate)
      };
      // console.log(this.newComment, ' new comment' );
      this.recivedComment.push(this.newComment);
    }
    );
  }
}
